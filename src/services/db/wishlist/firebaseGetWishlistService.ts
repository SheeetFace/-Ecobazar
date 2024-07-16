import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const firebaseGetWishlistService = async (userId:string): Promise<string[]> => {
  const db = getFirestore();
  const wishlistRef = doc(db, 'wishlist', userId);

  try{
    const wishlistDoc = await getDoc(wishlistRef);

    if(wishlistDoc.exists()){
      const wishlistData = wishlistDoc.data();

      if(wishlistData.items && Array.isArray(wishlistData.items)) return wishlistData.items as string[];
    }

    return []

  }catch(error){
    console.error('Error fetching wishlist data:', error)
    throw error;
  }
}