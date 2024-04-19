import { useState, useCallback, useRef, useEffect} from "react";

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

// const useFilter = (): [InitFilter, ChangeFilterFn] => {
    
//   const [filter, setFilter] = useState<InitFilter>(initFilter);
// // const filterRef = useRef<InitFilter>(initFilter);


//   const changeNewFilter = useCallback<ChangeFilterFn>((key, newFilter)=>{
//       setFilter(prev =>({
//         ...prev,
//         [key]: newFilter,
//       }))
//     },[]);



//     return [filter, changeNewFilter]
// }

// export default useFilter;


// const useFilter = (): [InitFilter, ChangeFilterFn] => {
//     const [filter, setFilter] = useState<InitFilter>(initFilter);
//     const filterRef = useRef<InitFilter>(initFilter);
  
//     const changeNewFilter = useCallback<ChangeFilterFn>((key, newFilter) => {
//       filterRef.current = {
//         ...filterRef.current,
//         [key]: newFilter,
//       };
//       setFilter(filterRef.current);
//     }, []);
  
//     useEffect(() => {
//       setFilter(filterRef.current);
//     }, []);
  
//     return [filter, changeNewFilter];
//   };
  
//   export default useFilter;


// const useFilter = () => {
//     const initialFilter = JSON.parse(sessionStorage.getItem("filter") || "{}");
//     const [filter, setFilter] = useState<InitFilter>(initialFilter);
  
//     useEffect(() => {
//         console.log(filter)
//       sessionStorage.setItem("filter", JSON.stringify(filter));
//     }, [filter]);
  
//     const changeNewFilter = (key, newFilter) => {
//     console.log(key, newFilter)
//       setFilter((prevFilter) => ({
//         ...prevFilter,
//         [key]: newFilter,
//       }));
//     }
  
//     return [filter, changeNewFilter];
//   };

//   export default useFilter;


// const useFilter = (): [InitFilter, ChangeFilterFn] => {
//     const initialFilter = JSON.parse(sessionStorage.getItem('filter') || JSON.stringify(initFilter));
//     const [filter, setFilter] = useState<InitFilter>(initialFilter);
  
//     useEffect(() => {
//       console.log(filter);
//       sessionStorage.setItem('filter', JSON.stringify(filter));
//     }, [filter]);
  
//     const changeNewFilter: ChangeFilterFn = (key, newFilter) => {
//       console.log(key, newFilter);
//       setFilter((prevFilter) => ({
//         ...prevFilter,
//         [key]: newFilter,
//       }));
//     };
  
//     return [filter, changeNewFilter];
//   };
  
//   export default useFilter;
//!

const useFilter = (): [InitFilter, ChangeFilterFn] => {
  // const useFilter = (): any => {
    const [filter, setFilter] = useState<InitFilter>(
      JSON.parse(sessionStorage.getItem('filter') || JSON.stringify(initFilter))
    );


    useEffect(() => {
      sessionStorage.setItem('filter', JSON.stringify(filter));
    //   console.log(filter)
    }, [filter]);
  
    const changeNewFilter: ChangeFilterFn = (key, newFilter) => {
      const updatedFilter = { ...JSON.parse(sessionStorage.getItem('filter') || '{}'), [key]: newFilter };
      sessionStorage.setItem('filter', JSON.stringify(updatedFilter));

      setFilter(updatedFilter);
    };


    // console.log(filter)
    return [filter, changeNewFilter];
};
  
export default useFilter;