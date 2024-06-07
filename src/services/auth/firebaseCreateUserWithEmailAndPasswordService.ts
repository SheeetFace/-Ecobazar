import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import { firebaseCreateUserDataService } from "../db/firebaseCreateUserDataService";

import { firebaseErrorHandlingOperations } from "../../utils/firebase/firebaseErrorHandlingOperations";


export const firebaseCreateUserWithEmailAndPasswordService = async(email:string, password:string, displayName:string)=>{

    const auth = getAuth();

    return firebaseErrorHandlingOperations(async ()=>{

        const credential = await createUserWithEmailAndPassword(auth, email, password);

        return await firebaseCreateUserDataService(credential.user, displayName);

    })

};