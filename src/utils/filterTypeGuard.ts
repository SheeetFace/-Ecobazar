import type { InitProductFilter } from '../types/productFilterType';
import type { InitBlogFilter } from '../types/blogFilterTypes';

import { changeFilter as changeProductFilter } from '../store/slices/productFilterSlice';
import { changeFilter as changeBlogFilter} from '../store/slices/blogFilterSlice';


import type { AppDispatch } from '../store/store';
import type { ProductFilterAction } from '../types/productFilterType';
import type { BlogFilterAction } from '../types/blogFilterTypes';

type Filter = InitProductFilter | InitBlogFilter;

type FilterTypeGuard=(
  dispatch: AppDispatch,
  filter: Filter,
  action: ProductFilterAction | BlogFilterAction
)=>void;

export const filterTypeGuard: FilterTypeGuard = (dispatch, filter, action) => {

  if('productsLength' in filter) dispatch(changeProductFilter(action as ProductFilterAction));
  else if ('blogsLength' in filter) dispatch(changeBlogFilter(action as BlogFilterAction));
  else console.error('🚨 Error: none of the filters were found 🚨');
  
};










