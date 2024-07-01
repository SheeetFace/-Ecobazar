import { baseApi } from "../baseApi";

import type { ProductDataType } from "../../types/productDataTypes";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (create)=>({
        getProducts: create.query<ProductDataType[], void>({
            query: ()=> '/products'
        })
    }),
    overrideExisting:true,
})

export const {useGetProductsQuery} = productsApi;