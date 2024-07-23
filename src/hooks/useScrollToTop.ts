import { useEffect } from "react";

type Behavior = 'smooth'|'instant'

type UseScrollToTop =(
  currentPage:number,
  behavior?:Behavior,
  top?:number
 ) =>void


const useScrollToTop:UseScrollToTop = (currentPage,behavior='smooth', top=0) => {
    
    useEffect(() => {
        window.scrollTo({
          top,
          behavior,
        });
      },[currentPage]);
}

export default useScrollToTop;