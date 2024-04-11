import {useForm} from 'react-hook-form'

import BillingAddressInfo from '../../../formField/BillingAddressInfo/BillingAddressInfo';
import TextAreaFormField from '../../../formField/TextAreaFormField/TextAreaFormField';
import Button from '../../../../atoms/Button/Button';
import Divider from '../../../../atoms/Divider/Divider';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import styles from '../BillingInfo/BillingInfo.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    firstName:string
    lastName:string
    companyName:string
    streetAddress:string
    countryOrRegion:string
    state:string
    zipCode:number
    email:string
    phone:number
    differentAddress:string
    orderNotes:string
}
type TypeWatchCountryOrRegionValue ="United States"|"Canada"|"United Kingdom"


const BillingInfo:React.FC = () => {

    const {register, formState:{errors},handleSubmit, watch} = useForm<FormValues>();

    const countryOrRegionValue = watch('countryOrRegion') as TypeWatchCountryOrRegionValue;

    const onSubmit: SubmitHandler<FormValues> =(data)=>{
        alert(JSON.stringify(data))
        // reset()
    }

    const billingAddressInfoOptions={
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
        companyName:{
            isErrors:!!errors?.companyName,
            register:{...register('companyName')},
            errorMessage:errors.companyName?.message
        },
        streetAddress:{
            isErrors:!!errors?.streetAddress,
            register:{...register('streetAddress', getValidationOptions(/^(?!\s*$).+$/, "address (minimum 2 characters and not an empty string)"))},
            errorMessage:errors.streetAddress?.message
        },
        countryOrRegion:{
            isErrors:!!errors?.countryOrRegion,
            register:{...register('countryOrRegion', getValidationOptions(/^\S.*\S$/, ""))},
            errorMessage:errors.countryOrRegion?.message
        },
        state:{
            isErrors:!!errors?.state,
            register:{...register('state',getValidationOptions(/^\S.*\S$/, ""))},
            errorMessage:errors.state?.message
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
        watchCountryOrRegionValue: countryOrRegionValue
    }


    return (
        <section className={styles.BillingInfo}>
            <h1>Billing Information</h1>

            <form className={styles._form} onSubmit={handleSubmit(onSubmit)}>

                <BillingAddressInfo options={billingAddressInfoOptions}/>
            
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
            
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth' type='submit' text='Confirm Billing Information'/>
            </form>

        </section>
    )
}

export default BillingInfo;