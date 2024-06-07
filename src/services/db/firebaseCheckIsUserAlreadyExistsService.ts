import { getFirestore, doc, getDoc } from "firebase/firestore";

import { firebaseCreateUserDataService } from "./firebaseCreateUserDataService";

import type { User } from "firebase/auth";

export const firebaseCheckIsUserAlreadyExistsService = async(user:User,displayName:string)=>{

    const db = getFirestore();
    const userRef = doc(db, 'users', user.uid);

    const userDoc = await getDoc(userRef);

    if(userDoc.exists()) return userDoc.data();

    return await firebaseCreateUserDataService(user, displayName)

}