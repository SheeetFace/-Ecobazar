import { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form'

import { firebaseCreateUserWithEmailAndPasswordService } from '../../../../../services/auth/firebaseCreateUserWithEmailAndPasswordService';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import InputFormField from '../../../formField/InputFormField/InputFormField';
import Button from '../../../../atoms/Button/Button';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';
import Loader from '../../../../molecules/Loader/Loader';
import AlertMessage from '../../../../molecules/AlertMessage/AlertMessage';

import SocialAuth from '../../../../molecules/pages/loginAndRegistrationPage/SocialAuth/SocialAuth';

import styles from '../Registration/Registration.module.scss';


import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    email:string
    displayName:string
    password:string
    confirmPassword:string
    checkbox:boolean
}

const Registration:React.FC = () => {

    const [errorMessageUser, setErrorMessageUser] = useState<string|null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {register, formState:{errors},handleSubmit,watch} = useForm<FormValues>();

    const password = watch('password');

    const navigation = useNavigate()

    const isChecked = !!errors?.checkbox;

    const passwordsMatch =(value: string,password: string)=>{
        return value === password || "Passwords do not match"
    }

    const onSubmit: SubmitHandler<FormValues> = async(data)=>{

        setIsLoading(true)

        if(errorMessageUser) setErrorMessageUser(null)

        const email = data.email;
        const password = data.password
        const displayName = data.displayName

        if(email && password){
            const res = await firebaseCreateUserWithEmailAndPasswordService(email,password,displayName)
            console.log(res)

            if(res.error.status)  return setIsLoading(false), setErrorMessageUser(res.error.message)

            navigation('/')
            
        }else{
            console.error("Something wrong with email or password")
        }

        setIsLoading(false)
    }

    return (
        <section className={styles.Registration}>
            <h1>Create Account</h1>

            <AlertMessage type='note'/>

            <form  onSubmit={handleSubmit(onSubmit)}>

                <InputFormField className={styles._input} 
                                placeholder='Email' 
                                inputType='string'
                                isErrors={!!errors?.email}
                                register={{...register('email',getValidationOptions(/^\S+@\S+\.\S+$/, "email"))}}
                                errorMessage={errors.email?.message}
                />
                <InputFormField className={styles._input} 
                                placeholder='Display name' 
                                inputType='string'
                                maxLength={20}
                                isErrors={!!errors?.displayName}
                                register={{...register('displayName',getValidationOptions(/^(?!.*\s{2,})[^ ].*[^ ]\s*$/, "display name (minimum 2 characters and not an empty string and maximum one space)"))}}
                                errorMessage={errors.displayName?.message}
                />
               
                <InputFormField className={styles._input} 
                                placeholder='Password' 
                                isPassword={true} 
                                inputType='string'
                                isErrors={!!errors?.password}
                                register={{...register('password', getValidationOptions(/^[^\s]{5,}$/,'password (minimum 5 characters and not an empty string or spaces)'))}}
                                errorMessage={errors.password?.message}
                />
                <InputFormField className={styles._input} 
                                placeholder='Confirm password' 
                                isPassword={true} 
                                inputType='string'
                                isErrors={!!errors?.confirmPassword}
                                register={{
                                    ...register("confirmPassword",{
                                      validate: (value) => passwordsMatch(value, password),
                                      ...getValidationOptions(/^[^\s]{5,}$/, 'password (minimum 5 characters and not an empty string or spaces)'),
                                    })
                                }}
                                errorMessage={errors.confirmPassword?.message}
                />

                <div className={styles._checkboxWrapper}>
                    <div className={styles._container}>
                        <InputFormField className={styles._input} 
                                    placeholder='' 
                                    inputType='checkbox'
                                    isErrors={!!errors?.checkbox}
                                    register={{...register('checkbox', {required: true})}}
                                    errorMessage={''}
                        />
                        <span>Accept all terms & Conditions</span>
                      
                    </div>
                </div>

                <div className={styles._checkboxError}> {isChecked ? <FormValidationMessage error='Please select the checkbox'/> :<span>&nbsp;</span>}</div>

                {errorMessageUser ? <FormValidationMessage error={errorMessageUser}/> :null}
                {isLoading ? <Loader/> :null}

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text='Create Account'/>

            </form>

            <SocialAuth/>

            <div className={styles._registerOrLogin}>
                <span>Already have account?</span>

                <NavLink    to={'/login'}
                            className={styles._navLink}>
                     Login
                </NavLink>
            </div>

        </section>
    )
}

export default Registration;