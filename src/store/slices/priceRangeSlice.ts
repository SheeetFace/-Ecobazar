import { createSlice} from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface PriceRange{
  minPrice:number
  maxPrice:number
}

const initialState: PriceRange ={
  minPrice: 0,
  maxPrice: 100
}

const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<PriceRange>)=>{
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    }
  }
})

export const { setPriceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;