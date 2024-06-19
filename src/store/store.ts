import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux";

import checkoutFormSlice from './slices/checkoutFormSlice'
import productModalSlice from './slices/productModalSlice';

export const store = configureStore({
  reducer: {
    checkoutForm: checkoutFormSlice,
    productModal: productModalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

