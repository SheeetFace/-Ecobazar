import { useState, useCallback} from "react";

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


const initFilter:InitFilter={
    categoryValue:'',
    price:{
        min:'',
        max:''
    },
    rating:null,
    tag:''
}

const useFilter = (): [InitFilter, ChangeFilterFn] => {
    
  const [filter, setFilter] = useState<InitFilter>(initFilter);

  const changeNewFilter = useCallback<ChangeFilterFn>((key, newFilter)=>{
      setFilter(prev =>({
        ...prev,
        [key]: newFilter,
      }))
    },[]);

    return [filter, changeNewFilter]
}

export default useFilter;