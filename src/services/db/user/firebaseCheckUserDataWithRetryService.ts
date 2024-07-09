import { firebaseGetUserDataByUid } from './firebaseGetUserDataByUid';
import { firebaseCheckIsUserAlreadyExistsService } from './firebaseCheckIsUserAlreadyExistsService';

import type { User } from 'firebase/auth';

export const firebaseCheckUserDataWithRetryService = async (firebaseUser:User, retryCount=3, delay=500)=>{

    for(let attempt=0; attempt<retryCount; attempt++){
        const userData = await firebaseGetUserDataByUid(firebaseUser.uid);

        if(userData) return userData;

        console.warn(`Attempt ${attempt + 1}: User data not found, retrying...`)
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    console.error("Failed to retrieve user data after multiple attempts, creating new data.")
    return await firebaseCheckIsUserAlreadyExistsService(firebaseUser, firebaseUser.displayName || '')
}