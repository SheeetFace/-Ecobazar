import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import { firebaseInitUserDataService } from "./firebaseInitUserDataService";

import { FirebaseError } from 'firebase/app';


export const firebaseCreateUserWithEmailAndPasswordService = async(email:string, password:string, displayName:string)=>{

    const auth = getAuth();

    const res = {
        data:{},
        error:{
            status:false,
            message:''
        }
    }

    try{
        const credential =  await createUserWithEmailAndPassword(auth, email, password)

        const initData = await firebaseInitUserDataService(credential.user, displayName)

        res.data=initData

        

    }
    catch(error){

        res.error.status=true;

        if(error instanceof FirebaseError){
            console.error('Error code:', error.code);
            res.error.message= error.code
        }else{
            console.error('Other error occurred:', error);
            res.error.message= error as string
        }  
    }

    return res;
};


