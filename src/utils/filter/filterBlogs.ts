import { subFilterCategoryValue } from "./subFilters/subFilterCategoryValue";
import { subFilterTag } from "./subFilters/subFilterTag";
import { subFilterDate } from "./subFilters/subFilterDate";

import type { BlogDataTypes } from "../../types/blogDataTypes";
import type { InitBlogFilter } from "../../types/blogFilterTypes";

export const filterBlogs = (blogs: BlogDataTypes[], filter: InitBlogFilter): BlogDataTypes[] => {

    const sortedBlogs = subFilterDate(blogs, filter.date) as BlogDataTypes[]
  
    const filteredBlogs = sortedBlogs.filter((blog)=>{

    if(filter.search){
        const lowerCaseSearch = filter.search.toLowerCase();
        const lowerCaseTitle = blog.title.toLowerCase();

        if(!lowerCaseTitle.includes(lowerCaseSearch)) return false;
    }


      if(!subFilterCategoryValue(filter.categoryValue,blog.category)) return false;
  
      if(!subFilterTag(filter.tag,blog.tag)) return false;
      
      return true; 
    });
    
    return filteredBlogs;
};