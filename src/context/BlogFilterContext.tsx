import { createContext, useState} from 'react';

import type {InitBlogFilter,TChangeBlogFilterFn } from '../types/blogFilterTypes';

interface BlogFilterContextType {
    filter: InitBlogFilter;
    changeFilter: TChangeBlogFilterFn
    clearFilter:() => void
}
  
interface BlogFilterProviderProps {
    children: React.ReactNode;
}

type TCreateInitBlogFilter = ()=> InitBlogFilter;

const createInitBlogFilter:TCreateInitBlogFilter =()=>{
    const initBlogFilter:InitBlogFilter={
      search:'',
      categoryValue:[],
      tag:'',
      date:'newest',
      blogsLength:0
    }
  
    return initBlogFilter;
};


export const BlogFilterContext = createContext<BlogFilterContextType>({
    filter: createInitBlogFilter(),
    changeFilter:() => {},
    clearFilter:() => {}
});

export const BlogFilterProvider:React.FC<BlogFilterProviderProps> = ({ children }) => {
    const [filter, setFilter] = useState<InitBlogFilter>(()=>createInitBlogFilter());
    
    const changeFilter: TChangeBlogFilterFn =(key, newFilter)=>{
        setFilter((prevFilter) => ({
          ...prevFilter,
          [key]: newFilter,
        }));
    }
  
    const clearFilter =()=>{setFilter(()=>createInitBlogFilter())}
  
    return(
      <BlogFilterContext.Provider value={{ filter, changeFilter,clearFilter }}>
        {children}
      </BlogFilterContext.Provider>
    )
};