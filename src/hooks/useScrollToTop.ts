import { useEffect } from "react";

const useScrollToTop = (currentPage:number) => {
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },[currentPage]);
}

export default useScrollToTop;