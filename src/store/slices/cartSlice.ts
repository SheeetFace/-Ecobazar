import { createSlice, PayloadAction,createSelector } from '@reduxjs/toolkit';

interface CartState{
  items: Map<string, number>
}

const initialState:CartState = {
  items: new Map<string, number>()
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartItem(state, action: PayloadAction<string>){
      const itemId = action.payload;

      if(state.items.has(itemId)) state.items.delete(itemId);
      else state.items.set(itemId, 1);
    },

    increaseQuantity(state, action: PayloadAction<string>){
      const itemId = action.payload;

      if(state.items.has(itemId)){
        const currentQuantity = state.items.get(itemId) || 1;
        state.items.set(itemId, currentQuantity + 1);
      }
    },

    decreaseQuantity(state, action: PayloadAction<string>){
      const itemId = action.payload;

      if(state.items.has(itemId)){
        const currentQuantity = state.items.get(itemId) || 1;
        state.items.set(itemId, currentQuantity - 1);
      }
    },

    clearCart(state) {
      state.items.clear();
    }
  }
});


export const selectItems = (state:{ cart:CartState }) => state.cart.items;

export const selectIsItemInCart = createSelector(
  [selectItems, (_state:{ cart:CartState }, itemId:string) => itemId],
  (items, itemId) => items.has(itemId)
);

export const selectItemsLength = createSelector(
  selectItems,(items) => items.size
);

export const selectQuantityCountByID = createSelector(
  [selectItems, (_state:{ cart:CartState }, itemId:string) => itemId],
  (items, itemId) => items.get(itemId)
);

export const selectCartItemIDs = createSelector(
  selectItems,(items) => Array.from(items.keys())
);

export const selectCartItemsArray = createSelector(
  selectItems,(items) => Array.from(items,([ID,quantity])=>({ID,quantity}))
);


export const { toggleCartItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

