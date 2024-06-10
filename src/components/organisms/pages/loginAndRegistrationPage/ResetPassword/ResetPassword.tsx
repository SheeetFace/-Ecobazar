import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import {useForm} from 'react-hook-form'

import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import InputFormField from '../../../formField/InputFormField/InputFormField';
import AlertMessage from '../../../../molecules/AlertMessage/AlertMessage';
import Button from '../../../../atoms/Button/Button';

import { firebaseResetPasswordService } from '../../../../../services/auth/firebaseResetPasswordService';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';
import { checkIsInputsMatch } from '../../../../../utils/checkIsInputsMatch';

import styles from '../ResetPassword/ResetPassword.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    email:string
    confirmEmail:string
}


const ResetPassword:React.FC = () => {

    const [alert, setAlert] =useState<JSX.Element|null>(null)

    const {register, formState:{errors},handleSubmit,watch,reset} = useForm<FormValues>();

    const email = watch('email');

    const { executeAsync, renderLoaderOrError } = useLoadingAndError();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {

        if(data.email !=='customer1@gmail.com'){
            const res = await executeAsync(()=> firebaseResetPasswordService(data.email));
  
            if(res === undefined){
                setAlert(<AlertMessage type='success' title='Success' message={`Reset link sent to your email - ${email}`}  isCanClose={false}/>)
                reset()
            } 

        }else{
            setAlert(<AlertMessage type='error' title='Error' message='It is forbidden to change the password to the test account customer1@gmail.com' isCanClose={false}/>)
        }
      };

    return (
        <section className={styles.ResetPassword}>
            <h1>Reset Password</h1>

            <span>It looks like you have forgotten your password for <span className={styles._ecobazar}>Ecobazar</span>. If so, please write your email and click the button below to reset your password.</span>

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputFormField className={styles._input} 
                                placeholder='Email' 
                                inputType='string'
                                isErrors={!!errors?.email}
                                register={{...register('email',getValidationOptions(/^\S+@\S+\.\S+$/, "email"))}}
                                errorMessage={errors.email?.message}
                />
                <InputFormField className={styles._input} 
                                placeholder='Confirm email' 
                                inputType='string'
                                isErrors={!!errors?.confirmEmail}
                                register={{
                                    ...register("confirmEmail",{
                                        validate: (value) =>  checkIsInputsMatch(value,email,"Email do not match"),
                                        ...getValidationOptions(/^\S+@\S+\.\S+$/, "email"),
                                    })
                                }}
                                errorMessage={errors.confirmEmail?.message}
                />

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text='Reset Password'/>
            </form>
            
            {renderLoaderOrError()}

            {alert}

        <div className={styles._registerOrLoginOrReset}>
            <NavLink to='/login'
                     className={styles._navLink}>

                        Back to Login
            </NavLink>
        </div>

        </section>
    )
}

export default ResetPassword;