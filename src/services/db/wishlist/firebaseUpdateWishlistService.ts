import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const firebaseUpdateWishlistService = async(userId: string, wishlistItems: string[]|[])=>{
    const db = getFirestore();
    const wishlistRef = doc(db, 'wishlist', userId);

    try{
        await setDoc(wishlistRef, { items: wishlistItems });

        const updatedDoc = await getDoc(wishlistRef);

        if(updatedDoc.exists()) return updatedDoc.data() as { items: string[]|[] };
        else throw new Error('Failed to update wishlist document');

    }catch(error){
        console.error('Error updating wishlist in Firebase:', error);
        throw error;
    }
}