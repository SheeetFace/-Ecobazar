import { useEffect } from "react";

import type { ProductDataType } from "../types/productDataTypes";
import type { BlogDataTypes } from "../types/blogDataTypes";

type UseEnsureValidPage = (
    filteredProducts:ProductDataType[]|BlogDataTypes[],
    currentPage:number,
    itemsPerPage:number,
    goToPage:(page:number)=>void
)=>void

const useEnsureValidPage:UseEnsureValidPage = (filteredProducts, currentPage, itemsPerPage, goToPage) => {
    useEffect(() => {
      if(filteredProducts.length < (currentPage * itemsPerPage)) {
        goToPage(1);
      }
    }, [JSON.stringify(filteredProducts)]);
  }

export default useEnsureValidPage;