import { NavLink, useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form'
import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import { firebaseCreateUserWithEmailAndPasswordService } from '../../../../../services/auth/firebaseCreateUserWithEmailAndPasswordService';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';
import { checkIsInputsMatch } from '../../../../../utils/checkIsInputsMatch';

import InputFormField from '../../../formField/InputFormField/InputFormField';
import Button from '../../../../atoms/Button/Button';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';
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

    const {register, formState:{errors},handleSubmit,watch} = useForm<FormValues>();

    const { executeAsync, renderLoaderOrError } = useLoadingAndError();

    const password = watch('password');

    const navigation = useNavigate()

    const isChecked = !!errors?.checkbox;

    const onSubmit: SubmitHandler<FormValues> = async(data)=>{

        const {email,password,displayName} =data

        const res = await executeAsync(()=>firebaseCreateUserWithEmailAndPasswordService(email,password,displayName))

        if(res) return navigation('/')
    }

    return (
        <section className={styles.Registration}>
            <h1>Create Account</h1>

            <AlertMessage type='warning' title='Note' message='Please note, If you sign up with your email and password and then sign in via Google with the same address, you will have different accounts. Be careful when choosing your login method to avoid creating multiple accounts. Thank you for your understanding!'/>

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
                                    validate: (value) =>  checkIsInputsMatch(value,password,"Passwords do not match"),
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

                {renderLoaderOrError()}

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' 
                        type='submit' 
                        text='Create Account'
                        ariaLabel='Create Account button'
                />

            </form>

            <SocialAuth/>

            <div className={styles._registerOrLoginOrReset}>
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