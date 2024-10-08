import { memo, useEffect } from 'react';

import {useForm} from 'react-hook-form'

import { useAppDispatch,useAppSelector } from '../../../../../store/store';

import { setBillingInfoValid } from '../../../../../store/slices/checkoutFormSlice';
import { setShippingInfo } from '../../../../../store/slices/checkoutFormSlice';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';
import { getDefaultFormValues } from '../../../../../utils/getDefaultFormValues';
import { areObjectsEqual } from '../../../../../utils/areObjectsEqual';

import BillingAddressInfo from '../../../formField/BillingAddressInfo/BillingAddressInfo';
import TextAreaFormField from '../../../formField/TextAreaFormField/TextAreaFormField';
import Button from '../../../../atoms/Button/Button';
import Divider from '../../../../atoms/Divider/Divider';


import styles from '../BillingInfo/BillingInfo.module.scss';

import type {SubmitHandler}from 'react-hook-form';
import type { UserDataCountryType } from '../../../../../types/userTypes';


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

    orderNotes:string
}


const BillingInfo:React.FC = () => {

    const dispatch = useAppDispatch()
    
    const user = useAppSelector((state)=> state.auth.user)

    const defaultValues = getDefaultFormValues(user);

    const {register, formState,handleSubmit, watch,} = useForm<FormValues>({
        defaultValues
    });
    const { errors, isValid } = formState;

    const countryValueWatch = watch('country') as UserDataCountryType;

    const isBillingInfoValid = useAppSelector((state)=> state.checkoutForm.isBillingInfoValid);

    useEffect(()=>{
        if(!isValid) dispatch(setBillingInfoValid(false))
    },[isValid])

    const onSubmit: SubmitHandler<FormValues> =(data)=>{

        const difFields = areObjectsEqual(data,defaultValues)

        if(difFields.length>0) dispatch(setShippingInfo(difFields))

        dispatch(setBillingInfoValid(true))
    }

    const billingAddressSettings={
        firstName:{
            isErrors:!!errors?.firstName,
            register:{...register('firstName', getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, "name (2 characters minimum and not an empty string)"))},
            errorMessage:errors.firstName?.message
        },
        lastName:{
            isErrors:!!errors?.lastName,
            register:{...register('lastName',  getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, " last name (2 characters minimum and not an empty string)"))},
            errorMessage:errors.lastName?.message
        },
        company:{
            isErrors:!!errors?.company,
            register:{...register('company')},
            errorMessage:errors.company?.message
        },
        address:{
            isErrors:!!errors?.address,
            register:{...register('address', getValidationOptions(/^(?!\s*$).+$/, "address (minimum 2 characters and not an empty string)"))},
            errorMessage:errors.address?.message
        },
        country:{
            isErrors:!!errors?.country,
            register:{...register('country', getValidationOptions(/^\S.*\S$/, ""))},
            errorMessage:errors.country?.message
        },
        region:{
            isErrors:!!errors?.region,
            register:{...register('region',getValidationOptions(/^\S.*\S$/, ""))},
            errorMessage:errors.region?.message
        },
        zipCode:{
            isErrors:!!errors?.zipCode,
            register:{...register('zipCode',getValidationOptions(/^(?!\s*$)[a-zA-Z0-9\s]+$/, ""))},
            errorMessage:errors.zipCode?.message
        },
        email:{
            isErrors:!!errors?.email,
            register:{...register('email',getValidationOptions(/^\S+@\S+\.\S+$/, "email"))},
            errorMessage:errors.email?.message
        },
        phone:{
            isErrors:!!errors?.phone,
            register:{...register('phone',getValidationOptions(/^(?!\s*$)[+\s()\d]+$/, "phone"))},
            errorMessage:errors.phone?.message
        },
        watchCountryOrRegionValue: countryValueWatch
    }

    return (
        <section className={styles.BillingInfo}>
            <h1>Billing Information</h1>

            <form className={styles._form} onSubmit={handleSubmit(onSubmit)}>

                <BillingAddressInfo options={billingAddressSettings} />
            
                <Divider type='horizontal' className={styles._divider}/>

                <h1>Additional Information</h1>

                <div className={styles._textAreaField}>
                    <label>Order Notes
                        <span>(optional)</span>
                    </label>
                    <TextAreaFormField
                        maxLength={500}
                        placeholder='Notes about your order, e.g. special notes for delivery'
                        isErrors={!!errors?.orderNotes}
                        register={{...register('orderNotes')}}
                        errorMessage={errors.orderNotes?.message}
                    />
                </div>
            
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                        type='submit'
                        text={!isBillingInfoValid || !isValid ? 'Confirm Billing Information' :'Confirmed ✓'}
                        ariaLabel='Confirm Billing Information button'
                        />
            </form>

        </section>
    )
}

export default memo(BillingInfo);