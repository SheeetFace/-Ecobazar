import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseErrorHandlingOperations } from "../../../utils/firebase/firebaseErrorHandlingOperations";
import type { ResponseOrderDataType } from "../../../types/db/order/responseOrderDataType";

export const firebaseGetUserOrdersService = async (userUID: string) => {
  const db = getFirestore();
  
  return firebaseErrorHandlingOperations<ResponseOrderDataType[]>(async () => {
    const userOrdersCollectionRef = collection(db, 'orders', userUID, 'userOrders');
    
    try{
        const querySnapshot = await getDocs(userOrdersCollectionRef);
        
        return querySnapshot.docs.map(doc=>({...doc.data()})) as ResponseOrderDataType[];
    }catch{
        throw new Error('Error: Can not get order history.')
    }

  });
};