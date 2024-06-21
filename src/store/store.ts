import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux";

import checkoutFormSlice from './slices/checkoutFormSlice'
import productModalSlice from './slices/productModalSlice';
import authSlice from './slices/authSlice';
import mainSearchSlice from './slices/mainSearchSlice';
import productFilterSlice from './slices/productFilterSlice';
import blogFilterSlice from './slices/blogFilterSlice';

export const store = configureStore({
  reducer: {
    checkoutForm: checkoutFormSlice,
    productModal: productModalSlice,
    auth:authSlice,
    mainSearch: mainSearchSlice,
    productFilter:productFilterSlice,
    blogFilter:blogFilterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

