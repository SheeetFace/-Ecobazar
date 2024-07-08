import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState{
  items: string[];
}

const initialState: CartState ={
  items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartItem(state, action: PayloadAction<string>){
            const itemId = action.payload;
            const index = state.items.indexOf(itemId);
      
            if(index >= 0) state.items.splice(index, 1);
            else state.items.push(itemId);
        },
        clearCart(state){
            state.items=[]
        }
    },
    selectors: {
      selectIsItemInCart: (state, itemId: string) => state.items.includes(itemId)
    }

})

export const { toggleCartItem, clearCart } = cartSlice.actions;
export const { selectIsItemInCart } = cartSlice.selectors;
export default cartSlice.reducer;