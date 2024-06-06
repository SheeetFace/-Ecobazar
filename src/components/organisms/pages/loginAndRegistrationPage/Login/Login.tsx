import { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form'

import { firebaseSignInWithEmailAndPasswordService } from '../../../../../services/auth/signInServices/firebaseSignInWithEmailAndPasswordService';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import Input from '../../../../atoms/form/Input/Input';
import InputFormField from '../../../formField/InputFormField/InputFormField';
import Button from '../../../../atoms/Button/Button';
import SocialAuth from '../../../../molecules/pages/loginAndRegistrationPage/SocialAuth/SocialAuth';
import AlertMessage from '../../../../molecules/AlertMessage/AlertMessage';
import Loader from '../../../../molecules/Loader/Loader';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';

import styles from '../Login/Login.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    email:string
    password:string
}

const Login:React.FC = () => {

    const [errorMessageUser, setErrorMessageUser] = useState<string|null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {register, formState:{errors},handleSubmit} = useForm<FormValues>();

    const navigation = useNavigate()

    const onSubmit: SubmitHandler<FormValues> = async(data)=>{
        setIsLoading(true)

        const email = data.email
        const password = data.password

        if(errorMessageUser) setErrorMessageUser(null)
        
        if(email && password){

            const res = await firebaseSignInWithEmailAndPasswordService(email,password)

            if(res.error.status)  return setIsLoading(false), setErrorMessageUser(res.error.message)

            navigation('/')

        }else console.error("Something wrong with email or password")
        
        setIsLoading(false)
    }

    return (
        <section className={styles.Login}>
            <h1>Sign in</h1>
            
            <AlertMessage type='test' isCanClose={false}/>
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
                            placeholder='Password' 
                            isPassword={true} 
                            inputType='string'
                            isErrors={!!errors?.password}
                            register={{...register('password', getValidationOptions(/^[^\s]{5,}$/,'password (minimum 5 characters and not an empty string or spaces)'))}}
                            errorMessage={errors.password?.message}
            />

                <div className={styles._container}>
                    <div className={styles._checkboxWrapper}>
                        <Input className={styles._checkbox} type='checkbox'/>
                        <span>Remember me</span>
                    </div>

                    <span className={styles._forgetPassword}>
                        Forget Password
                    </span>
                </div>
                
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text='Log in'/>

            </form>

            {errorMessageUser ? <FormValidationMessage error={errorMessageUser}/> :null}
            {isLoading ? <Loader/> :null}

            <SocialAuth/>
            
            <div className={styles._registerOrLogin}>
                <span>Don’t have account?</span>

                <NavLink    to={'/registration'}
                            className={styles._navLink}>
                    Registration
                </NavLink>
            </div>
        </section>
    )
}

export default Login;