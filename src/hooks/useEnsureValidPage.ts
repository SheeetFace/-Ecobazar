import { useEffect } from "react";

import type { ProductDataType } from "../types/product/productDataTypes";
import type { BlogDataTypes } from "../types/blog/blogDataTypes";
import type { InitProductFilter } from "../types/product/productFilterType";
import type { InitBlogFilter } from "../types/blog/blogFilterTypes";

type UseEnsureValidPage = (
    filteredProducts:ProductDataType[]|BlogDataTypes[],
    currentPage:number,
    itemsPerPage:number,
    goToPage:(page:number)=>void,
    filter:InitProductFilter|InitBlogFilter
)=>void

const useEnsureValidPage:UseEnsureValidPage = (filteredProducts, currentPage, itemsPerPage, goToPage, filter) => {
    
    useEffect(()=>{ goToPage(1) },[JSON.stringify(filter)]) 

    useEffect(()=>{
      if(filteredProducts.length < (currentPage * itemsPerPage)) goToPage(1);
    },[JSON.stringify(filteredProducts)])

  }
export default useEnsureValidPage;