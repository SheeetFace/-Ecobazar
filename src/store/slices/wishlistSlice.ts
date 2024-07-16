import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

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
      setWishlistItems(state, action: PayloadAction<string[]>){
        state.items = action.payload
      },
      toggleWishlistItem(state, action: PayloadAction<string>){
          const itemId = action.payload;
          const index = state.items.indexOf(itemId);
    
          if(index >= 0) state.items.splice(index, 1);
          else state.items.push(itemId);
      },
      clearWishlist(state){
          state.items=[]
      }
    }

})

export const selectItems = (state:{ wishlist:WishlistState }) => state.wishlist.items;

export const selectWishlistItemsArray = createSelector(
  selectItems,(items) => items
);

export const {setWishlistItems, toggleWishlistItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;