import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import { firebaseInitUserDataService } from "./firebaseInitUserDataService";

import { firebaseAuthOperations } from "../../utils/firebase/firebaseAuthOperations";


export const firebaseCreateUserWithEmailAndPasswordService = async(email:string, password:string, displayName:string)=>{

    const auth = getAuth();

    return firebaseAuthOperations(async ()=>{
        const credential =  await createUserWithEmailAndPassword(auth, email, password)
        const initData = await firebaseInitUserDataService(credential.user, displayName)

        return initData
    })

};