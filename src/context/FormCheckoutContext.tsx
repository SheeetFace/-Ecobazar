import { createContext, useState, useCallback, useEffect } from 'react';

import type { ReactNode } from 'react';

interface FormCheckoutContextType{
    isBillingInfoValid: boolean;
    setBillingInfoValid: (isValid: boolean) => void;
    paymentMethodValid: string|null;
    setPaymentMethodValid: (method: string) => void;
    resetFormState: () =>void;
    isFormReady:boolean;
}

export const FormCheckoutContext = createContext<FormCheckoutContextType>({
    isBillingInfoValid: false,
    setBillingInfoValid: () => {},
    paymentMethodValid: null,
    setPaymentMethodValid: () => {},
    resetFormState: () =>{},
    isFormReady:false,
});

export const FormCheckoutProvider: React.FC<{children:ReactNode}> = ({ children }) => {
    const [isBillingInfoValid, setBillingInfoValid] = useState<boolean>(false);
    const [paymentMethodValid, setPaymentMethodValid] = useState<string|null>(null);
    const [isFormReady, setIsFormReady] = useState<boolean>(false)

    useEffect(()=>{
        if(isBillingInfoValid && paymentMethodValid) setIsFormReady(true)
    },[isBillingInfoValid,paymentMethodValid])

    const resetFormState = useCallback(()=>{
        setBillingInfoValid(false)
        setPaymentMethodValid(null)
        setIsFormReady(false)
    }, [])

    return(
        <FormCheckoutContext.Provider value={{ isBillingInfoValid, setBillingInfoValid, paymentMethodValid, setPaymentMethodValid,resetFormState,isFormReady }}>
            {children}
        </FormCheckoutContext.Provider>
    );
};
