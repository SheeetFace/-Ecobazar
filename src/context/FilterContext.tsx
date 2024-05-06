import { createContext, useState} from 'react';

import type {InitProductFilter,TChangeProductFilterFn } from '../types/productFilterType';

interface FilterContextType {
  filter: InitProductFilter;
  changeFilter: TChangeProductFilterFn
  clearFilter:() => void
}

interface FilterProviderProps {
    children: React.ReactNode;
}

type TCreateInitFilter = ()=> InitProductFilter;

const createInitFilter:TCreateInitFilter =()=>{
  const initFilter:InitProductFilter={
    categoryValue:[],
    price:{
        min:'',
        max:''
    },
    rating:[],
    tag:'',
    date:'newest'
  }

  return initFilter;
};

export const FilterContext = createContext<FilterContextType>({
  filter: createInitFilter(),
  changeFilter:() => {},
  clearFilter:() => {}
});

export const FilterProvider:React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<InitProductFilter>(()=>createInitFilter());

  const changeFilter: TChangeProductFilterFn =(key, newFilter)=>{
    //need to do something with the comparison and don't call the function with the same value
      setFilter((prevFilter) => ({
        ...prevFilter,
        [key]: newFilter,
      }));
  }

  const clearFilter =()=>{setFilter(()=>createInitFilter())}

  return(
    <FilterContext.Provider value={{ filter, changeFilter,clearFilter }}>
      {children}
    </FilterContext.Provider>
  )
};