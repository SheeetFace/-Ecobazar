import type { InitBlogFilter } from "../../types/blog/blogFilterTypes";

export const isBlogFilterEmpty = (filter:InitBlogFilter) =>{

    const isFilterEmpty =   filter.search === '' &&
                            filter.categoryValue.length === 0 &&
                            filter.tag === '' &&
                            filter.date === 'newest'

    return isFilterEmpty;
}