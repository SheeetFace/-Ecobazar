import { createContext, useState, useContext} from 'react';

import type {ReactNode} from 'react'
import type { ProductDataType } from '../types/productDataTypes';

interface MainSearchContext{
    query: string
    setQuery: (query:string)=>void
    suggestions: ProductDataType[]|[]
    setSuggestions: (suggestions: ProductDataType[]|[])=>void
  }

const MainSearchContext = createContext<MainSearchContext|undefined>(undefined);

export const useSearch =()=>{
  const context = useContext(MainSearchContext);

  if(!context) throw new Error('useSearch must be used within a SearchProvider');
  
  return context;
};

export const SearchProvider = ({ children }:{children:ReactNode})=>{
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ProductDataType[]>([]);

  return(
    <MainSearchContext.Provider value={{ query, setQuery, suggestions, setSuggestions }}>
      {children}
    </MainSearchContext.Provider>
  )
};