
export type TDate = 'newest'|'oldest';

export interface InitBlogFilter{
    search:string
    categoryValue:string[]
    tag:string
    date:TDate
    blogsLength:number
}

type TKey=  keyof InitBlogFilter;
export type TChangeBlogFilterFn = <K extends TKey>(key: K, newFilter: InitBlogFilter[K]) => void;

