import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';

import type { UserDataType } from '../../types/userTypes';

type NewData = Partial<UserDataType>['accountSettings'] | Partial<UserDataType>['billingAddress']
type DataType = 'accountSettings'|'billingAddress'

export const firebaseUpdateUserDataService = async(uid:string,newData:NewData, dataType:DataType)=>{

    const db = getFirestore();
    const userRef = doc(db, 'users', uid);

    const updateData = { [dataType]: newData };

    await updateDoc(userRef, updateData);

    const updatedDoc = await getDoc(userRef);

    if(updatedDoc.exists()) return updatedDoc.data() as UserDataType;

    else throw new Error('No such document for user with UID')
   
}