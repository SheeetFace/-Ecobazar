import { subFilterCategoryValue } from "./subFilters/subFilterCategoryValue";
import { subFilterTag } from "./subFilters/subFilterTag";
import { subFilterDate } from "./subFilters/subFilterDate";
import { subFilterSearch } from "./subFilters/subFilterSearch";

import type { BlogDataTypes } from "../../types/blogDataTypes";
import type { InitBlogFilter } from "../../types/blogFilterTypes";

export const filterBlogs = (blogs: BlogDataTypes[], filter: InitBlogFilter): BlogDataTypes[] => {

    const sortedBlogs = subFilterDate(blogs, filter.date) as BlogDataTypes[]
  
    const filteredBlogs = sortedBlogs.filter((blog)=>{

        if(!subFilterSearch(filter.search,blog.title)) return false;

        if(!subFilterCategoryValue(filter.categoryValue,blog.category)) return false;
  
        if(!subFilterTag(filter.tag,blog.tag)) return false;
      
        return true; 
    });
    
    return filteredBlogs;
};