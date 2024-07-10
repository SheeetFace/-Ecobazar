import { createSlice,createSelector } from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';

interface CheckoutFormState {
    isBillingInfoValid: boolean;
    paymentMethodValid: string|null;
    isFormReady: boolean;
    shippingInfo:Record<string,string>[]|[]
}

const initialState: CheckoutFormState ={
    isBillingInfoValid: false,
    paymentMethodValid: null,
    isFormReady: false,
    shippingInfo:[]
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
        setShippingInfo(state,action:PayloadAction<Record<string,string>[]|[]>){
            state.shippingInfo = action.payload;
        },
        resetFormState(state){
            state.isBillingInfoValid = false;
            state.paymentMethodValid = null;
            state.isFormReady = false;
        },
    },
});

const selectStateInfo = (state:{checkoutForm:CheckoutFormState}) => state.checkoutForm;

export const selectShippingInfo = createSelector(
    selectStateInfo,(state) => state.shippingInfo
);
export const selectPaymentMethod = createSelector(
    selectStateInfo,(state) => state.paymentMethodValid
);

export const { setBillingInfoValid, setPaymentMethodValid,setShippingInfo, resetFormState } = checkoutFormSlice.actions;
export default checkoutFormSlice.reducer;