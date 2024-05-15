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
        setFilter((prevFilter) => {

          if(key === 'tag' && prevFilter.tag === newFilter) return prevFilter;

          return{
            ...prevFilter,
            [key]: newFilter,
          }
        });
    }
  
    const clearFilter =()=>{
      setFilter((prevFilter)=>{
        const isFilterEmpty = prevFilter.search === '' &&
                              prevFilter.categoryValue.length === 0 &&
                              prevFilter.tag === '' &&
                              prevFilter.date === 'newest'
    
        if(isFilterEmpty) return prevFilter;

        return createInitBlogFilter();
      });
    }
  
    return(
      <BlogFilterContext.Provider value={{ filter, changeFilter,clearFilter }}>
        {children}
      </BlogFilterContext.Provider>
    )
};