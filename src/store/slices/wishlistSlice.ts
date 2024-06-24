import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState{
  items: string[];
}

const initialState: WishlistState ={
  items: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlistItem(state, action: PayloadAction<string>){
            const itemId = action.payload;
            const index = state.items.indexOf(itemId);
      
            if(index >= 0) state.items.splice(index, 1);
            else state.items.push(itemId);
        }
    }

})

export const { toggleWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;