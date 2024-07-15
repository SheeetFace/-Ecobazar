import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

interface CartItem {
  ID: string
  quantity: number
}

export const firebaseUpdateCartService = async(userId: string, cartItems: CartItem[])=>{
    const db = getFirestore();
    const cartRef = doc(db, 'cart', userId);

    try{
        await setDoc(cartRef, { items: cartItems });

        const updatedDoc = await getDoc(cartRef);

        if(updatedDoc.exists()) return updatedDoc.data() as { items: CartItem[] };
        else throw new Error('Failed to update cart document');

    }catch(error){
        console.error('Error updating cart in Firebase:', error);
        throw error;
    }
}