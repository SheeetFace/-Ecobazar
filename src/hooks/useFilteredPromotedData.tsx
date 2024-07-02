import { useCallback } from "react"

import { useGetProductsQuery } from "../api/products/productApi"
import useApiResource from "./useApiResource"

import { shopProductData } from "../data/temp/shopProductData"

import { ProductDataType } from "../types/productDataTypes"

import type { FilterPromotedTypes as FilterType } from "../types/filterPromotedType"


const useFilteredPromotedData = (filterType:FilterType) => {

    const {responseData, content} = useApiResource<ProductDataType[]>(useGetProductsQuery, 'products');

    const filterData =useCallback((filterType:FilterType)=>{
        if(responseData) return responseData.filter((data)=>data.promotedCategories.includes(filterType));
        else return shopProductData.filter((data)=>data.promotedCategories.includes(filterType));
    },[filterType])

    return{
        filteredData: filterData(filterType),
        content
    }

}
export default useFilteredPromotedData;