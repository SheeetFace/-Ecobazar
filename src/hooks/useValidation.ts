import { useState, useEffect, useCallback } from 'react';

import { validateSearchOrSubscribe } from '../utils/validateSearchOrSubscribe';

import { ValidateSearchOrSubscribeTypes,ValidationResult } from '../types/validateSearchOrSubscribeTypes';

interface ValidationResultExtended extends ValidationResult{
    value:string
}

const useValidation =()=>{

  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (!isValid) {
      const timeout = setTimeout(() => {
        setIsValid(true);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [isValid]);

  
    const validateFn =useCallback((value:string,type:ValidateSearchOrSubscribeTypes):ValidationResultExtended=>{
        const isInputValid = validateSearchOrSubscribe(value, type);

        if(!isInputValid.result){
            setIsValid(isInputValid.result);
            return {...isInputValid, value}
        }

        return {...isInputValid, value}

    },[])


  return { isValid, validateFn };
};

export default useValidation;
