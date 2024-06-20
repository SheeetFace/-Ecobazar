import type { InitProductFilter } from '../types/productFilterType';
import type { InitBlogFilter } from '../types/blogFilterTypes';
import { changeFilter as changeProductFilter } from '../store/slices/productFilterSlice';

import type { AppDispatch } from '../store/store';

import type { ProductFilterAction } from '../types/productFilterType';

type Key<T> = keyof T;  //!
type Value<T> = T[keyof T]; //! 
type BlogFilterAction = { key: Key<InitBlogFilter>; value: Value<InitBlogFilter> }; //!

type Filter = InitProductFilter | InitBlogFilter;

type FilterTypeGuard=(
  dispatch: AppDispatch,
  filter: Filter,
  action: ProductFilterAction | BlogFilterAction
)=>void;

export const filterTypeGuard: FilterTypeGuard = (dispatch, filter, action) => {

  if('productsLength' in filter) dispatch(changeProductFilter(action as ProductFilterAction));
  else if ('blogsLength' in filter) console.log('1231231') //!
  else console.error('🚨 Error: none of the filters were found 🚨');

};










