import { useAppSelector } from "../../store/store";

import useTotalPrice from "../useTotalPrice";

import { selectShippingInfo,selectPaymentMethod } from "../../store/slices/checkoutFormSlice";
import { selectCartItemsArray } from "../../store/slices/cartSlice";

import { formatDate } from "../../utils/formatDate";

import type { SubmitOrderType } from "../../types/db/order/submitOrderType";

interface OrderData{
    userID:string,
    data:SubmitOrderType
}

const useOrderData = ():OrderData|Error=>{

    const shippingInfo = useAppSelector((state)=>selectShippingInfo(state))
    const paymentMethod = useAppSelector((state)=>selectPaymentMethod(state))
    const userID = useAppSelector((state)=>state.auth?.user?.uid)

    const productIDs = useAppSelector((state)=>selectCartItemsArray(state))

    const totalPrice = useTotalPrice()

    if(!userID) return new Error ('There is not userID')

    return{
        userID,
        data:{
            date:formatDate(new Date().toString(), 'normal'),
            shipping:shippingInfo,
            totalPrice,
            productIDs,
            paymentMethod:paymentMethod || 'PayPal',
            status:"Delivered"
        }
    }

}

export default useOrderData;