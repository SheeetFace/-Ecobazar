import { updateProfile, User} from "firebase/auth";

import { FirebaseError } from 'firebase/app';

export const firebaseInitUserDataService= async(user:User, displayName:string) => {

    const initData ={
        displayName: displayName || '',
        email: user?.email || '',
        photoURL: user?.photoURL || '',
        uid: user?.uid || '',
        firstName: '',
        lastName: '',
        userType: 'Customer',
        phone: '',
        address: '',
        country: '',
        region: '',
        zipCode: '',
        company: ''
    }

    try{
        await updateProfile(user, { displayName: JSON.stringify(initData) });
        return initData;
    }

    catch(error){
        if(error instanceof FirebaseError) console.error('Error code:', error.code);
        else console.error('Other error occurred:', error);

        throw error;
    }
}

