import { getFirestore, doc, getDoc } from 'firebase/firestore';

export interface CartItem {
  ID: string;
  quantity: number;
}

export const firebaseGetCartService = async (userId:string): Promise<CartItem[]> => {
  const db = getFirestore();
  const cartRef = doc(db, 'cart', userId);

  try{
    const cartDoc = await getDoc(cartRef);

    if(cartDoc.exists()){
      const cartData = cartDoc.data();

      if(cartData.items && Array.isArray(cartData.items)) return cartData.items as CartItem[];
    }

    return []

  }catch(error){
    console.error('Error fetching cart data:', error)
    throw error;
  }
}