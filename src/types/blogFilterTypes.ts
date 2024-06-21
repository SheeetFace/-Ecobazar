export type TDate = 'newest'|'oldest';

type Key<T> = keyof T;
type Value<T> = T[keyof T];

export interface InitBlogFilter{
    search:string
    categoryValue:string[]
    tag:string
    date:TDate
    blogsLength:number
}

type TKey=  keyof InitBlogFilter;
export type TChangeBlogFilterFn = <K extends TKey>(key: K, newFilter: InitBlogFilter[K]) => void; //! &&&

export type BlogFilterAction = { key: Key<InitBlogFilter>; value: Value<InitBlogFilter> };

