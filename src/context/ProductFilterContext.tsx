import { createContext, useState} from 'react';

import type {InitProductFilter,TChangeProductFilterFn } from '../types/productFilterType';

interface ProductFilterContextType {
  filter: InitProductFilter;
  changeFilter: TChangeProductFilterFn
  clearFilter:() => void
}

interface ProductFilterProviderProps {
    children: React.ReactNode;
}

type TCreateInitProductFilter = ()=> InitProductFilter;

const createInitProductFilter:TCreateInitProductFilter =()=>{
  const initProductFilter:InitProductFilter={
    categoryValue:[],
    price:{
        min:'',
        max:''
    },
    rating:[],
    tag:'',
    date:'newest',
    productsLength:0
  }

  return initProductFilter;
};

export const ProductFilterContext = createContext<ProductFilterContextType>({
  filter: createInitProductFilter(),
  changeFilter:() => {},
  clearFilter:() => {}
});

export const ProductFilterProvider:React.FC<ProductFilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<InitProductFilter>(()=>createInitProductFilter());

  const changeFilter: TChangeProductFilterFn =(key, newFilter)=>{
    //need to do something with the comparison and don't call the function with the same value
      setFilter((prevFilter) => ({
        ...prevFilter,
        [key]: newFilter,
      }));
  }

  const clearFilter =()=>{setFilter(()=>createInitProductFilter())}

  return(
    <ProductFilterContext.Provider value={{ filter, changeFilter,clearFilter }}>
      {children}
    </ProductFilterContext.Provider>
  )
};