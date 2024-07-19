import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isProductFilterEmpty } from '../../utils/filter/isProductFilterEmpty';
import type { InitProductFilter } from '../../types/product/productFilterType';

const createInitProductFilter = ():InitProductFilter => ({
  search: '',
  categoryValue: [],
  price: {
    min: '',
    max: '',
  },
  rating: [],
  tag: '',
  date: 'newest',
  productsLength: 0,
});

const initialState:InitProductFilter = createInitProductFilter();

const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers:{
    changeFilter: <K extends keyof InitProductFilter>(state: InitProductFilter, action: PayloadAction<{ key: K; value: InitProductFilter[K] }>)=>{
      const { key, value } = action.payload;
      if(key === 'tag' && state.tag === value) return;
      state[key] = value;
    },
    clearFilter:(state)=>{
      if(!isProductFilterEmpty(state)) return createInitProductFilter();
    },
  },
});

export const { changeFilter, clearFilter } = productFilterSlice.actions;
export default productFilterSlice.reducer;

