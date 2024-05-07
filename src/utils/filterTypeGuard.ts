
import type { InitProductFilter,TChangeProductFilterFn } from '../types/productFilterType';
import type { InitBlogFilter,TChangeBlogFilterFn } from '../types/blogFilterTypes';

type Filter =InitProductFilter|InitBlogFilter
type ChangeFilter =TChangeProductFilterFn|TChangeBlogFilterFn
type Key = keyof Filter
type Value<K extends Key> = Filter[K]

type FilterTypeGuard =(filter:Filter,changeFilter:ChangeFilter,key:Key,value:Value<Key>)=>void

export const filterTypeGuard:FilterTypeGuard= (filter,changeFilter,key, value) => {

    if('productsLength' in filter) (changeFilter as TChangeProductFilterFn)(key,value)

    else if('blogsLength' in filter) (changeFilter as TChangeBlogFilterFn)(key,value) 

    else console.error('🚨 Error: none of the filters were found 🚨')
}
