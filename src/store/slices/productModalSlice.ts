import { createSlice } from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';
import { ProductDataType } from "../../types/product/productDataTypes";

interface ProductModalState {
    isShow:boolean
    dataProduct:ProductDataType|null
}

const initialState: ProductModalState ={
    isShow:false,
    dataProduct:null
};

const productModalSlice = createSlice({
    name:'productModal',
    initialState,
    reducers:{
        openProductModal(state, action:PayloadAction<ProductDataType>){
            state.dataProduct = action.payload;
            state.isShow = true;
        },
        closeProductModal(state){
            state.isShow = false;
        }
    }  
})

export const {openProductModal,closeProductModal} = productModalSlice.actions;
export default productModalSlice.reducer;