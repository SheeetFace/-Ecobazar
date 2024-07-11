import { configureStore } from '@reduxjs/toolkit'

import { useDispatch, useSelector } from "react-redux";

import { enableMapSet } from 'immer';

import checkoutFormSlice from './slices/checkoutFormSlice'
import productModalSlice from './slices/productModalSlice';
import authSlice from './slices/authSlice';
import mainSearchSlice from './slices/mainSearchSlice';
import productFilterSlice from './slices/productFilterSlice';
import blogFilterSlice from './slices/blogFilterSlice';
import wishlistSlice from './slices/wishlistSlice';
import cartSlice from './slices/cartSlice';
import orderHistorySlice from './slices/orderHistorySlice';

import { baseApi } from '../api/baseApi';

enableMapSet();

export const store = configureStore({
  reducer: {
    checkoutForm: checkoutFormSlice,
    productModal: productModalSlice,
    auth:authSlice,
    mainSearch: mainSearchSlice,
    productFilter:productFilterSlice,
    blogFilter:blogFilterSlice,
    wishlist:wishlistSlice,
    cart:cartSlice,
    orderHistory:orderHistorySlice,
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

