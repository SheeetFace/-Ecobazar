import { getFirestore, setDoc, collection, addDoc } from "firebase/firestore";

import type { SummitOrderType } from "../../../types/db/order/submitOrderType";


export const firebaseAddOrderService = async (userUID: string, orderData:SummitOrderType) => {
  const db = getFirestore();
  
  const userOrdersCollectionRef = collection(db, 'orders', userUID, 'userOrders');

  try {
    const newOrderRef = await addDoc(userOrdersCollectionRef, {
      date: orderData.date,
      totalPrice: orderData.totalPrice,
      status: orderData.status,
      productIDs: orderData.productIDs,
      shipping:orderData.shipping,
      paymentMethod:orderData.paymentMethod
    });

    const newOrderId = newOrderRef.id;

    await setDoc(newOrderRef, { id: newOrderId }, { merge: true });

    console.log("Order added successfully with ID: ", newOrderId);
    return newOrderId;
  } catch (error) {
    console.error("Error adding order: ", error);
    throw error;
  }
};