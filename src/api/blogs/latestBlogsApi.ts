import { baseApi } from "../baseApi";

import type { BlogDataTypes } from "../../types/blogDataTypes";

export const latestBlogsApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getLatestBlogs: create.query<{list: BlogDataTypes[]}, void>({
            query: () => '/latest-blogs',
            transformResponse: (response:BlogDataTypes[]): {list:BlogDataTypes[]}=>{
                return {list:response};
            },
        })
    }),
    overrideExisting: true
})

export const { useGetLatestBlogsQuery } = latestBlogsApi;