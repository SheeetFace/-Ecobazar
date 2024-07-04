import { useEffect } from "react";

type Behavior = 'smooth'|'instant'

type UseScrollToTop =(currentPage:number,behavior?:Behavior ) =>void


const useScrollToTop:UseScrollToTop = (currentPage,behavior='smooth') => {
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior,
        });
      },[currentPage]);
}

export default useScrollToTop;