import { createSlice } from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';

interface CheckoutFormState {
    isBillingInfoValid: boolean;
    paymentMethodValid: string|null;
    isFormReady: boolean;
}

const initialState: CheckoutFormState ={
    isBillingInfoValid: false,
    paymentMethodValid: null,
    isFormReady: false,
};

const checkoutFormSlice = createSlice({
    name: 'checkoutForm',
    initialState,
    reducers: {
        setBillingInfoValid(state,action:PayloadAction<boolean>){
            state.isBillingInfoValid = action.payload;
            state.isFormReady = action.payload && !!state.paymentMethodValid;
        },
        setPaymentMethodValid(state,action:PayloadAction<string|null>){
            state.paymentMethodValid = action.payload;
            state.isFormReady = state.isBillingInfoValid && !!action.payload;
        },
        resetFormState(state){
            state.isBillingInfoValid = false;
            state.paymentMethodValid = null;
            state.isFormReady = false;
        },
    },
});

export const { setBillingInfoValid, setPaymentMethodValid, resetFormState } = checkoutFormSlice.actions;
export default checkoutFormSlice.reducer;