import { createSlice } from '@reduxjs/toolkit';

import { isBlogFilterEmpty } from '../../utils/filter/isBlogFilterEmpty';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { InitBlogFilter } from '../../types/blog/blogFilterTypes';

const createInitBlogFilter = ():InitBlogFilter=>({
  search: '',
  categoryValue: [],
  tag: '',
  date: 'newest',
  blogsLength: 0,
});

const initialState: InitBlogFilter = createInitBlogFilter();

const blogFilterSlice = createSlice({
  name: 'blogFilter',
  initialState,
  reducers:{
    changeFilter: <K extends keyof InitBlogFilter>(state: InitBlogFilter, action: PayloadAction<{ key: K; value: InitBlogFilter[K]}>)=>{
      const { key, value } = action.payload;
      if (key === 'tag' && state.tag === value) return;
      state[key] = value;
    },
    clearFilter: (state)=>{
      if(!isBlogFilterEmpty(state)) return createInitBlogFilter();
    },
  },
});

export const selectBlogFilter = (state:{ blogFilter:InitBlogFilter }) => state.blogFilter

export const { changeFilter, clearFilter } = blogFilterSlice.actions;
export default blogFilterSlice.reducer;