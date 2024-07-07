import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux";

import checkoutFormSlice from './slices/checkoutFormSlice'
import productModalSlice from './slices/productModalSlice';
import authSlice from './slices/authSlice';
import mainSearchSlice from './slices/mainSearchSlice';
import productFilterSlice from './slices/productFilterSlice';
import blogFilterSlice from './slices/blogFilterSlice';
import wishlistSlice from './slices/wishlistSlice';

import { baseApi } from '../api/baseApi';

export const store = configureStore({
  reducer: {
    checkoutForm: checkoutFormSlice,
    productModal: productModalSlice,
    auth:authSlice,
    mainSearch: mainSearchSlice,
    productFilter:productFilterSlice,
    blogFilter:blogFilterSlice,
    wishlist:wishlistSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
     serializableCheck: false
    }
  ).concat(baseApi.middleware),
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

