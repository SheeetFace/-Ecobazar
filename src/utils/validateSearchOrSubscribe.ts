import { ValidateSearchOrSubscribeTypes, ValidationResult } from "../types/validateSearchOrSubscribeTypes"

export const validateSearchOrSubscribe = (value:string, type:ValidateSearchOrSubscribeTypes):ValidationResult=>{

    const validation:ValidationResult = {
      result: true,
      reason: '',
    };
  
    const trimmedValue = value.trim();
  
    if(type === ValidateSearchOrSubscribeTypes.SEARCH && !trimmedValue){

      validation.result = false;
      validation.reason = 'inputEmpty';

    }else if(type === ValidateSearchOrSubscribeTypes.SUBSCRIBE){

      if(!trimmedValue){
        validation.result = false;
        validation.reason = 'inputEmpty'; 

      }else if(!trimmedValue.match(/^\S+@\S+\.\S+$/)){
        validation.result = false;
        validation.reason = 'invalidEmailFormat';
      }

    }
  
    return validation;
};