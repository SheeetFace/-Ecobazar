import { useMemo } from 'react';

import useApiResource from './useApiResource';
import { useGetProductsQuery } from '../api/products/productApi';


type Type = 'products'|'blogs'

export const useCountCategories=<T extends{ category: string }>(type:Type)=>{

    const {responseData} = useApiResource<T>(useGetProductsQuery, type)

    return useMemo(()=>{
        const countMap = new Map<string, number>()

        if(Array.isArray(responseData)){
            responseData.forEach((item:T)=>{
                const category = item.category.toLowerCase();
                countMap.set(category,(countMap.get(category) || 0) + 1);
            })
        }

    return countMap;

    },[responseData])
}