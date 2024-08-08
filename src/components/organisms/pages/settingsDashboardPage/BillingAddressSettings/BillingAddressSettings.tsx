import {useForm} from 'react-hook-form'

import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import { useAppSelector,useAppDispatch } from '../../../../../store/store';

import { updateUserData } from '../../../../../store/slices/authSlice';


import { firebaseUpdateUserDataService } from '../../../../../services/db/user/firebaseUpdateUserDataService';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';
import { hasFormValuesUpdated } from '../../../../../utils/hasFormValuesUpdated';
import { firebaseErrorHandlingOperations } from '../../../../../utils/firebase/firebaseErrorHandlingOperations';
import { getDefaultFormValues } from '../../../../../utils/getDefaultFormValues';

import Button from '../../../../atoms/Button/Button';
import BillingAddressInfo from '../../../formField/BillingAddressInfo/BillingAddressInfo';
import Divider from '../../../../atoms/Divider/Divider';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';

import styles from '../BillingAddressSettings/BillingAddressSettings.module.scss';

import type {SubmitHandler}from 'react-hook-form';
import type { UserDataType,UserDataCountryType } from '../../../../../types/userTypes';

interface FormValues{
    firstName:string
    lastName:string
    email:string
    phone:string
    address:string
    country:UserDataCountryType
    region:string
    zipCode:string
    company:string
}


const BillingAddressSettings:React.FC = () => {

    const dispatch = useAppDispatch()

    const user = useAppSelector((state)=> state.auth.user)
    const isUserCustomer1 = useAppSelector((state)=> state.auth.isCustomer1)

    const { executeAsync, renderLoaderOrError, isLoading } = useLoadingAndError<UserDataType>();

    const defaultValues = getDefaultFormValues(user);

    const {register, formState:{errors},handleSubmit, watch} = useForm<FormValues>({
        defaultValues
    });

    const countryValueWatch = watch('country') as UserDataCountryType;

    const onSubmit: SubmitHandler<FormValues> =async(data)=>{

        const isSimilar =hasFormValuesUpdated(data,defaultValues)

        if(!isSimilar && user?.uid){

            const updatedUserData = await executeAsync(async()=>{
                return await firebaseErrorHandlingOperations(async ()=>{
                    return await firebaseUpdateUserDataService(user.uid, data, 'billingAddress')
                })
            });

            if(updatedUserData) dispatch(updateUserData(updatedUserData))
 
        }
    }

    const billingAddressSettings={
        firstName:{
            isErrors:!!errors?.firstName,
            register:{...register('firstName', getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, "name (2 characters minimum and not an empty string)",false))},
            errorMessage:errors.firstName?.message
        },
        lastName:{
            isErrors:!!errors?.lastName,
            register:{...register('lastName',  getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, " last name (2 characters minimum and not an empty string)",false))},
            errorMessage:errors.lastName?.message
        },
        company:{
            isErrors:!!errors?.company,
            register:{...register('company')},
            errorMessage:errors.company?.message
        },
        address:{
            isErrors:!!errors?.address,
            register:{...register('address', getValidationOptions(/^(?!\s*$).+$/, "address (minimum 2 characters and not an empty string)",false))},
            errorMessage:errors.address?.message
        },
        country:{
            isErrors:!!errors?.country,
            register:{...register('country', getValidationOptions(/^\S.*\S$/, "",false))},
            errorMessage:errors.country?.message
        },
        region:{
            isErrors:!!errors?.region,
            register:{...register('region',getValidationOptions(/^\S.*\S$/, "",false))},
            errorMessage:errors.region?.message
        },
        zipCode:{
            isErrors:!!errors?.zipCode,
            register:{...register('zipCode',getValidationOptions(/^(?!\s*$)[a-zA-Z0-9\s]+$/, "",false))},
            errorMessage:errors.zipCode?.message
        },
        email:{
            isErrors:!!errors?.email,
            register:{...register('email',getValidationOptions(/^\S+@\S+\.\S+$/, "email",false))},
            errorMessage:errors.email?.message
        },
        phone:{
            isErrors:!!errors?.phone,
            register:{...register('phone',getValidationOptions(/^(\+)?(\s*\d\s*){7,15}$/, "phone",false))},
            errorMessage:errors.phone?.message
        },
        watchCountryOrRegionValue: countryValueWatch
    }

    return (
        <section className={styles.BillingAddressSettings}>
            <h2>Billing Address</h2>

            <Divider type='horizontal' className={styles._divider}/>

            <form onSubmit={handleSubmit(onSubmit)} className={styles._form}>

                <BillingAddressInfo options={billingAddressSettings} disabled={isUserCustomer1}/>

                {renderLoaderOrError()}

                <div className={styles._buttonSubmit}>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth' 
                            type='submit' 
                            text='Save Changes'
                            disabled={isUserCustomer1 || isLoading }
                            ariaLabel='Save Billing Address Changes button'
                    />
                </div>

                {isUserCustomer1 ? <FormValidationMessage error='Changing data for the test account is blocked.'/> :null}
            </form>
        </section>
    )
}

export default BillingAddressSettings;