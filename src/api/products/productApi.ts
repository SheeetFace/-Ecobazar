import { baseApi } from "../baseApi";

import type { ProductDataType } from "../../types/productDataTypes";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getProducts: create.query<{map: Map<string, ProductDataType>, list: ProductDataType[]}, void>({
            query: () => '/products',
            transformResponse: (response:ProductDataType[]): {map:Map<string,ProductDataType>, list:ProductDataType[]}=>{
                const productMap = new Map(response.map(product => [product.id, product]));
                return { map:productMap, list:response };
            },
        })
    }),
    overrideExisting: true
})

export const { useGetProductsQuery } = productsApi;