import { createContext, useState} from 'react';

interface InitFilter{
    categoryValue:string
    price:{
        min:string
        max:string
    },
    rating:number|null
    tag:string
}

type TKey=  keyof InitFilter;
type ChangeFilterFn = <K extends TKey>(key: K, newFilter: InitFilter[K]) => void;

interface FilterContextType {
  filter: InitFilter;
  changeFilter: ChangeFilterFn
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
    rating:null,
    tag:''
}

export const FilterContext = createContext<FilterContextType>({
  filter: initFilter,
  changeFilter: () => {},
});

export const FilterProvider:React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<InitFilter>(initFilter);

  const changeFilter: ChangeFilterFn =(key, newFilter)=>{
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