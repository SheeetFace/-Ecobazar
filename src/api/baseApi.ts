import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_BASE_API_URL;

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: () =>({})
})

