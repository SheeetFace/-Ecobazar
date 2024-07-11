import { createSlice, PayloadAction,createSelector } from '@reduxjs/toolkit';

import type { Status } from '../../types/statusTypes';
import type { ResponseOrderDataType as OrderHistory } from '../../types/db/order/responseOrderDataType';

interface OrderHistoryState{
    status:Status,
    orderHistory:OrderHistory[]

}

const initialState:OrderHistoryState={
    status:'idle',
    orderHistory:[]
}

const orderHistorySlice = createSlice({
    name: 'orderHistory',
    initialState,
    reducers: {
        updateStatus(state, action: PayloadAction<Status>){
            const newStatus = action.payload;
            state.status = newStatus;
        },
        updateAllOrderHistory(state, action: PayloadAction<OrderHistory[]>) {
            const newOrderHistory = action.payload;
            state.orderHistory = newOrderHistory;
        },
        updateOneOrderHistory(state, action: PayloadAction<OrderHistory>){
            const newOrderHistory = action.payload;
            state.orderHistory.push(newOrderHistory);
        },
        clearOrderHistory(state){
            state.orderHistory=[]
            state.status='idle'
        }
    }
})

const selectOrders = (state:{ orderHistory:OrderHistoryState }) => state.orderHistory;

export const selectOrdersStatus = createSelector(
    selectOrders,(state) => state.status
);
export const selectOrderHistory = createSelector(
    selectOrders,(state) => state.orderHistory
);

export const {updateStatus,updateAllOrderHistory,updateOneOrderHistory,clearOrderHistory} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;