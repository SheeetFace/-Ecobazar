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

    clearCart(state) {
      state.items.clear();
    }
  }
});


const selectItems = (state:{ cart:CartState }) => state.cart.items;

export const selectIsItemInCart = createSelector(
  [selectItems, (_state:{ cart:CartState }, itemId:string) => itemId],
  (items, itemId) => items.has(itemId)
);

export const selectCartItemIDs = createSelector(
  selectItems,(items) => Array.from(items.keys())
);

export const selectCartItemsArray = createSelector(
  selectItems,(items) => Array.from(items,([ID,quantity])=>({ID,quantity}))
);


export const { toggleCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

