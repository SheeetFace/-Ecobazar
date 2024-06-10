import { NavLink, useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form'
import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import { firebaseSignInWithEmailAndPasswordService } from '../../../../../services/auth/signInServices/firebaseSignInWithEmailAndPasswordService';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import Input from '../../../../atoms/form/Input/Input';
import InputFormField from '../../../formField/InputFormField/InputFormField';
import Button from '../../../../atoms/Button/Button';
import SocialAuth from '../../../../molecules/pages/loginAndRegistrationPage/SocialAuth/SocialAuth';
import AlertMessage from '../../../../molecules/AlertMessage/AlertMessage';

import styles from '../Login/Login.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    email:string
    password:string
}

const Login:React.FC = () => {

    const {register, formState:{errors},handleSubmit} = useForm<FormValues>();

    const { executeAsync, renderLoaderOrError } = useLoadingAndError();

    const navigation = useNavigate()

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
      const res = await executeAsync(()=> firebaseSignInWithEmailAndPasswordService(data.email, data.password));

      if(res) return navigation('/');

      console.error("Something wrong with email or password")
    };
  

    return (
        <section className={styles.Login}>
            <h1>Sign in</h1>

            <AlertMessage type='success' title='Test Account' message={<><b>email: </b>customer1@gmail.com<br/><b>password: </b>123123</>} isCanClose={false}/>
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

                    <div className={styles._forgetPassword}>
                        <NavLink    to={'/reset-password'}
                                    className={styles._navLink}>
                                Forget Password
                        </NavLink>
                    </div>
                </div>
                
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text='Log in'/>

            </form>

            {renderLoaderOrError()}

            <SocialAuth/>
            
            <div className={styles._registerOrLoginOrReset}>
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