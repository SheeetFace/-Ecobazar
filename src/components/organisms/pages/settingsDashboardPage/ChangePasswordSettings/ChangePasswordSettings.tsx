import { useContext,useState } from 'react';

import {useForm} from 'react-hook-form'

import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import { AuthContext } from '../../../../../context/AuthContext';

import { firebaseUpdatePasswordService } from '../../../../../services/auth/firebaseUpdatePasswordService';

import { checkIsInputsMatch } from '../../../../../utils/checkIsInputsMatch';
import { getValidationOptions } from '../../../../../utils/getValidationOptions';
import { firebaseErrorHandlingOperations } from '../../../../../utils/firebase/firebaseErrorHandlingOperations';

import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';
import InputFormField from '../../../formField/InputFormField/InputFormField';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';
import AlertMessage from '../../../../molecules/AlertMessage/AlertMessage';


import styles from '../ChangePasswordSettings/ChangePasswordSettings.module.scss';

import type {SubmitHandler}from 'react-hook-form';


interface FormValues{
    currentPassword:string
    newPassword:string
    confirmPassword:string
}

const ChangePasswordSettings:React.FC = () => {

    const [isPasswordUpdatedSuccess,setIsPasswordUpdatedSuccess] = useState<boolean|null>(null)

    const {isUserCustomer1} =useContext(AuthContext);

    const { executeAsync, renderLoaderOrError, isLoading } = useLoadingAndError();

    const {register, formState:{errors},handleSubmit,watch, reset} = useForm<FormValues>();

    const password = watch('newPassword');

    const storedProviderId = sessionStorage.getItem('provider');
    const isProviderPassword = storedProviderId ==='password' ? true : false;

    const ErrorMessage = 'password (minimum 5 characters and not an empty string or spaces)';

    const onSubmit: SubmitHandler<FormValues> =async(data)=>{

        if(isProviderPassword && data.currentPassword && data.newPassword){

            const res = await executeAsync(async()=>{
                return await firebaseErrorHandlingOperations(async()=>{
                    return await firebaseUpdatePasswordService(data.currentPassword, data.newPassword)
                })
            })

            if(res === undefined){
                setIsPasswordUpdatedSuccess(true)
                reset()
            }

        }

    }

    return (
        <div className={styles.ChangePasswordSettings}>
            <h2>Change Password</h2>
            
            <Divider type='horizontal' className={styles._divider}/>

            <form onSubmit={handleSubmit(onSubmit)} className={styles._form}>
                
                <div>
                    <label>Current Password</label>
                    <InputFormField className=''
                                    placeholder='Current Password'
                                    inputType='string'
                                    isErrors={!!errors?.currentPassword}
                                    register={{...register('currentPassword', getValidationOptions(/^[^\s]{5,}$/,ErrorMessage))}}
                                    errorMessage={errors.currentPassword?.message}
                                    isPassword={true}/>
                </div>

                <div className={styles._container}>
                    <div className={styles._new}>
                        <label>New Password</label>
                        <InputFormField className=''
                                    placeholder='New Password'
                                    inputType='string'
                                    isErrors={!!errors?.newPassword}
                                    register={{...register('newPassword', getValidationOptions(/^[^\s]{5,}$/,ErrorMessage))}}
                                    errorMessage={errors.newPassword?.message}
                                    isPassword={true}/>
                    </div>
                    <div className={styles._confirm}>
                        <label>Confirm Password</label>
                        <InputFormField className=''
                                    placeholder='Confirm Password'
                                    inputType='string'
                                    isErrors={!!errors?.confirmPassword}
                                    register={{...register('confirmPassword',{
                                        validate: (value) =>  checkIsInputsMatch(value,password,"Passwords do not match"),
                                        ...getValidationOptions(/^[^\s]{5,}$/, 'password (minimum 5 characters and not an empty string or spaces)'),
                                    })}}
                                    errorMessage={errors.confirmPassword?.message}
                                    isPassword={true}
                                    disabled={true}/>
                    </div>
                </div>

                {isPasswordUpdatedSuccess ? <AlertMessage type='success' title='Success' message='Password successfully updated' />:null}

                <div className={styles._buttonSubmit}>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' 
                            type='submit' 
                            text='Save Changes'
                            disabled={isUserCustomer1 || isLoading ||!isProviderPassword }
                    />
                </div>

                {renderLoaderOrError()}

                {isUserCustomer1 ? <FormValidationMessage error='Changing data for the test account is blocked.'/> :null}
                {!isProviderPassword ? <FormValidationMessage error='You can only change the password for accounts that were registered using email and password.'/> :null}
                
            </form>
        </div>
    )
}

export default ChangePasswordSettings;