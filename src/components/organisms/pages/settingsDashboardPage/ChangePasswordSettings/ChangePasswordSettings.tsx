import { useContext } from 'react';

import {useForm} from 'react-hook-form'

import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import { AuthContext } from '../../../../../context/AuthContext';

import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';
import InputFormField from '../../../formField/InputFormField/InputFormField';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import styles from '../ChangePasswordSettings/ChangePasswordSettings.module.scss';

import type {SubmitHandler}from 'react-hook-form';


interface FormValues{
    currentPassword:string
    newPassword:string
    confirmPassword:string
}

const ChangePasswordSettings:React.FC = () => {

    const {user,updateUserData,isUserCustomer1} =useContext(AuthContext)

    const { executeAsync, renderLoaderOrError, isLoading } = useLoadingAndError();

    const {register, formState:{errors},handleSubmit} = useForm<FormValues>();

    const storedProviderId = sessionStorage.getItem('provider');
    console.log(storedProviderId);
    const isProviderPassword = storedProviderId ==='password' ? true : false;
    console.log(isProviderPassword);

    const ErrorMessage = 'password (minimum 5 characters and not an empty string or spaces)';

    //!mb need to use watch to check NEWPASSWORD AND CONFIRM PASSWORD and some check CURRENTPASSWORD

    const onSubmit: SubmitHandler<FormValues> =(data)=>{
        alert(JSON.stringify(data))
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
                                    register={{...register('confirmPassword', getValidationOptions(/^[^\s]{5,}$/,ErrorMessage))}}
                                    errorMessage={errors.confirmPassword?.message}
                                    isPassword={true}
                                    disabled={true}/>
                    </div>
                </div>
                
                <div className={styles._buttonSubmit}>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' 
                            type='submit' 
                            text='Save Changes'
                            disabled={isUserCustomer1 || isLoading ||!isProviderPassword }
                    />
                </div>

                {isUserCustomer1 ? <FormValidationMessage error='Changing data for the test account is blocked.'/> :null}
                {!isProviderPassword ? <FormValidationMessage error='You can only change the password for accounts that were registered using email and password.'/> :null}
                
            </form>
        </div>
    )
}

export default ChangePasswordSettings;