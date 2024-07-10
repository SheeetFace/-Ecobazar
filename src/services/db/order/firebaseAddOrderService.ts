import { getFirestore, setDoc, collection, addDoc } from "firebase/firestore";

import { firebaseErrorHandlingOperations } from "../../../utils/firebase/firebaseErrorHandlingOperations";

import type { SubmitOrderType } from "../../../types/db/order/submitOrderType";

export const firebaseAddOrderService = async (userUID: string, orderData:SubmitOrderType) => {
  const db = getFirestore();
  
  return firebaseErrorHandlingOperations<SubmitOrderType>(async ()=>{
    const userOrdersCollectionRef = collection(db, 'orders', userUID, 'userOrders');
  
      const newOrderRef = await addDoc(userOrdersCollectionRef, {
        date: orderData.date,
        totalPrice: orderData.totalPrice,
        status: orderData.status,
        productIDs: orderData.productIDs,
        shipping:orderData.shipping,
        paymentMethod:orderData.paymentMethod
      });
  
      const newOrderId = newOrderRef.id;
  
      try{
        await setDoc(newOrderRef, { id: newOrderId }, { merge: true });
      }catch(error){
        throw new Error('Failed to add order. Please try again later.');
      }
    
      return { ...orderData, id:newOrderId, status:"Order Received" };
  })
};