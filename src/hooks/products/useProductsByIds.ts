import { useMemo } from 'react';

import { useGetProductsQuery } from '../../api/products/productApi';

import { shopProductData } from '../../data/temp/shopProductData';

import type { ProductDataType } from '../../types/product/productDataTypes';


const getProductsByIds = (ids:string[], productMap:Map<string,ProductDataType>):ProductDataType[]=>{
    return ids.map(id => productMap.get(id)) as ProductDataType[];
};
  
export const useProductsByIds = (ids: string[]) => {
    const { data, isLoading } = useGetProductsQuery();

    const responseMap = data?.map;

    const filteredProducts = useMemo(()=>{
        if(responseMap) return getProductsByIds(ids, responseMap);
        else return getProductsByIds(ids, (new Map(shopProductData.map(product => [product.id, product]))) );
    }, [ids,responseMap]);

    return { filteredProducts, isLoading };
};