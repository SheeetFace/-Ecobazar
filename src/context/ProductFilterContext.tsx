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
      setFilter((prevFilter)=>{

        if(key === 'tag' && prevFilter.tag === newFilter) return prevFilter;

        return{
          ...prevFilter,
          [key]: newFilter,
        }
      });
  }

  const clearFilter =()=>{
    setFilter((prevFilter)=>{
      const isFilterEmpty = prevFilter.categoryValue.length === 0 &&
                            prevFilter.price.min==='' &&
                            prevFilter.price.max==='' &&
                            prevFilter.rating.length === 0 &&
                            prevFilter.tag=== '' &&
                            prevFilter.date=== 'newest'

      if(isFilterEmpty) return prevFilter;

      return createInitProductFilter()
    }
  )}

  return(
    <ProductFilterContext.Provider value={{ filter, changeFilter,clearFilter }}>
      {children}
    </ProductFilterContext.Provider>
  )
};