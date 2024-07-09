import { getFirestore, doc, getDoc } from "firebase/firestore";

import { firebaseCreateUserDataService } from "./firebaseCreateUserDataService";

import type { User } from "firebase/auth";

export const firebaseCheckIsUserAlreadyExistsService = async(user:User,displayName:string)=>{

    const db = getFirestore();
    const userRef = doc(db, 'users', user.uid);

    const userDoc = await getDoc(userRef);
    const docData = userDoc.data()

    // if(!docData) throw new Error('User not found in the DB');

    if(userDoc.exists()) return docData;

    return await firebaseCreateUserDataService(user, displayName)

}