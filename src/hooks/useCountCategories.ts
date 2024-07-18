import { useMemo } from 'react';

import useApiResource from './useApiResource';


import type { QueryHook } from '../types/queryHookTypes';

type Type = 'products'|'blogs'


export const useCountCategories=<T extends{ category: string }>(query:QueryHook<T>,type:Type)=>{

    const {responseData} = useApiResource<T>(query, type)

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