import { baseApi } from "../baseApi";

import type { BlogDataTypes } from "../../types/blogDataTypes";

export const blogsApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getBlogs: create.query<{list: BlogDataTypes[]}, void>({
            query: () => '/blogs',
            transformResponse: (response:BlogDataTypes[]): {list:BlogDataTypes[]}=>{
                return {list:response};
            },
        })
    }),
    overrideExisting: true
})

export const { useGetBlogsQuery } = blogsApi;