import { useMemo } from "react"

import { useGetProductsQuery } from "../api/products/productApi"
import useApiResource from "./useApiResource"

import { shopProductData } from "../data/temp/shopProductData"

import { ProductDataType } from "../types/productDataTypes"

import type { FilterPromotedTypes as FilterType } from "../types/filterPromotedType"


const useFilteredPromotedData = (filterType:FilterType) => {

    const {responseData, content} = useApiResource<ProductDataType[]>(useGetProductsQuery, 'products');

    const filteredData =useMemo(()=>{
        let data:ProductDataType[];

        if(responseData) data =responseData;
        else data = shopProductData;

        return data.filter((data)=>data.promotedCategories.includes(filterType));
    },[filterType,responseData])

    return { filteredData, content }
}
export default useFilteredPromotedData;
