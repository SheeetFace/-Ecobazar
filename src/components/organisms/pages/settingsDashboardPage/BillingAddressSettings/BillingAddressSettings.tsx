import {useForm} from 'react-hook-form'

import Button from '../../../../atoms/Button/Button';
import BillingAddressInfo from '../../../formField/BillingAddressInfo/BillingAddressInfo';
import Divider from '../../../../atoms/Divider/Divider';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import styles from '../BillingAddressSettings/BillingAddressSettings.module.scss';

import type {SubmitHandler}from 'react-hook-form';
type TypeWatchCountryOrRegionValue ="United States"|"Canada"|"United Kingdom"

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
}

const BillingAddressSettings:React.FC = () => {

    const {register, formState:{errors},handleSubmit, watch} = useForm<FormValues>();

    const countryOrRegionValue = watch('countryOrRegion') as TypeWatchCountryOrRegionValue;

    const onSubmit: SubmitHandler<FormValues> =(data)=>{
        alert(JSON.stringify(data))
        // reset()
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
        <section className={styles.BillingAddressSettings}>
            <h2>Billing Address</h2>

            <Divider type='horizontal' className={styles._divider}/>

            <form onSubmit={handleSubmit(onSubmit)} className={styles._form}>

                <BillingAddressInfo options={billingAddressSettings}/>

                <div className={styles._buttonSubmit}>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='submit' text='Save Changes'/>
                </div>
            </form>
        </section>
    )
}

export default BillingAddressSettings;