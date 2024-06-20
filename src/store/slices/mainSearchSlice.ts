import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductDataType } from '../../types/productDataTypes';

interface MainSearchState{
  query: string;
  suggestions: ProductDataType[];
}

const initialState: MainSearchState ={
  query: '',
  suggestions: [],
}

const mainSearchSlice = createSlice({
  name: 'mainSearch',
  initialState,
  reducers:{
    setQuery(state, action: PayloadAction<string>){
      state.query = action.payload;
    },
    setSuggestions(state, action: PayloadAction<ProductDataType[]>){
      state.suggestions = action.payload;
    },
  }
})

export const { setQuery, setSuggestions } = mainSearchSlice.actions;
export default mainSearchSlice.reducer;