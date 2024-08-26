import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const firebaseGetUserDataByUid = async(uid:string)=>{
    
    const db = getFirestore();
    const userRef = doc(db, 'users', uid);

    const userDoc = await getDoc(userRef);

    if(userDoc.exists()) return userDoc.data();

}