import type { InitProductFilter,TChangeProductFilterFn } from '../types/productFilterType';
import type { InitBlogFilter,TChangeBlogFilterFn } from '../types/blogFilterTypes';

type Filter =InitProductFilter|InitBlogFilter
type ChangeFilter =TChangeProductFilterFn|TChangeBlogFilterFn
type Key = keyof InitProductFilter | keyof InitBlogFilter
type Value = InitProductFilter[keyof InitProductFilter] | InitBlogFilter[keyof InitBlogFilter]

type FilterTypeGuard =(filter:Filter,changeFilter:ChangeFilter,key:Key,value:Value)=>void

export const filterTypeGuard:FilterTypeGuard= (filter,changeFilter,key, value) => {

    if(key in filter && 'productsLength' in filter) (changeFilter as TChangeProductFilterFn)(key as keyof InitProductFilter, value as keyof InitProductFilter)
    else if(key in filter && 'blogsLength' in filter)(changeFilter as TChangeBlogFilterFn)(key as keyof InitBlogFilter,value as keyof InitBlogFilter) 

    else console.error('🚨 Error: none of the filters were found 🚨')
}





