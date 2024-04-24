import { createContext, useState} from 'react';

type TDate = 'newest'|'oldest'

interface InitFilter{
    categoryValue:string[]
    price:{
        min:string
        max:string
    },
    rating:number[]
    tag:string
    date:TDate
}

type TKey=  keyof InitFilter;
type TChangeFilterFn = <K extends TKey>(key: K, newFilter: InitFilter[K]) => void;

interface FilterContextType {
  filter: InitFilter;
  changeFilter: TChangeFilterFn
  clearFilter:() => void
}

interface FilterProviderProps {
    children: React.ReactNode;
}

type TCreateInitFilter = ()=> InitFilter;

const createInitFilter:TCreateInitFilter =()=>{
  const initFilter:InitFilter={
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
  const [filter, setFilter] = useState<InitFilter>(createInitFilter());

  const changeFilter: TChangeFilterFn =(key, newFilter)=>{
    //need to do something with the comparison and don't call the function with the same value
      setFilter((prevFilter) => ({
        ...prevFilter,
        [key]: newFilter,
      }));
  }

  const clearFilter =()=>{setFilter(createInitFilter())}

  return(
    <FilterContext.Provider value={{ filter, changeFilter,clearFilter }}>
      {children}
    </FilterContext.Provider>
  )
};