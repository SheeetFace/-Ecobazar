import { createContext, useState} from 'react';

type TDate = 'latest'|'newest'|'oldest'

interface InitFilter{
    categoryValue:string
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
}

interface FilterProviderProps {
    children: React.ReactNode;
}


const initFilter:InitFilter={
    categoryValue:'',
    price:{
        min:'',
        max:''
    },
    rating:[],
    tag:'',
    date:'latest'
}

export const FilterContext = createContext<FilterContextType>({
  filter: initFilter,
  changeFilter: () => {},
});

export const FilterProvider:React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<InitFilter>(initFilter);

  const changeFilter: TChangeFilterFn =(key, newFilter)=>{
    //need to do something with the comparison and don't call the function with the same value
      setFilter((prevFilter) => ({
        ...prevFilter,
        [key]: newFilter,
      }));
  }

  return(
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  )
};