// import { useState,useRef } from 'react';
import {useForm} from 'react-hook-form'

import ProfilePictureWithChangeButton from '../components/ProfilePictureWithChangeButton/ProfilePictureWithChangeButton';
import InputFormField from '../../../formField/InputFormField/InputFormField';
import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import styles from '../AccountSettings/AccountSettings.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    firstName:string
    lastName:string
    email:string
    phone:number
    picture:string
}

const AccountSettings:React.FC = () => {

    const {register, formState:{errors},handleSubmit, setValue} = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> =(data)=>{
        alert(JSON.stringify(data))
        // reset()
    }

    return (
        <section className={styles.AccountSettings}>
            <h2>Account Settings</h2>

            <Divider type='horizontal' className={styles._divider}/>

            <form className={styles._form} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles._container}>

                    <div className={styles._info}>
                        <div>
                            <label>First Name</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='First Name'
                                            isErrors={!!errors?.firstName}
                                            register={{...register('firstName', getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, "name (2 characters minimum and not an empty string)"))}}
                                            errorMessage={errors.firstName?.message}
                                            maxLength={50}
                            />
                        </div>

                        <div>
                            <label>Last Name</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Last Name'
                                            isErrors={!!errors?.lastName}
                                            register={{...register('lastName',  getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, " last name (2 characters minimum and not an empty string)"))}}
                                            errorMessage={errors.lastName?.message}
                                            maxLength={50}
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Email'
                                            isErrors={!!errors?.email}
                                            register={{...register('email',getValidationOptions(/^\S+@\S+\.\S+$/, "email"))}}
                                            errorMessage={errors.email?.message}
                                            maxLength={50}
                            />
                        </div>

                        <div>
                            <label>Phone</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Phone'
                                            isErrors={!!errors?.phone}
                                            register={{...register('phone',getValidationOptions(/^(?!\s*$)[+\s()\d]+$/, "phone"))}}
                                            errorMessage={errors.phone?.message}
                                            maxLength={50}
                            />
                        </div>
                    </div>

                    <ProfilePictureWithChangeButton register={{...register('picture')}} setValue={setValue}/>

                </div>

                <div className={styles._buttonSubmit}>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='submit' text='Save Changes'/>
                </div>
                
            </form>

        </section>
    )
}

export default AccountSettings;

