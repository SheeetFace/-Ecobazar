import { getFirestore, doc, setDoc } from "firebase/firestore";

import { createUserData } from "../../utils/firebase/db/createUserData";

import type { User } from "firebase/auth";


export const firebaseCreateUserDataService = async(user:User, displayName:string) => {

    const db = getFirestore();
    const userRef = doc(db, 'users', user.uid);

    const initData = createUserData(user, displayName);

    await setDoc(userRef, initData);

    return initData;

}   

