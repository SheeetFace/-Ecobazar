import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux";

import checkoutFormSlice from './slices/checkoutFormSlice'
import productModalSlice from './slices/productModalSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    checkoutForm: checkoutFormSlice,
    productModal: productModalSlice,
    auth:authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

