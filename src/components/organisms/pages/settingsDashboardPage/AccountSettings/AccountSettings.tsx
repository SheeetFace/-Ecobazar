import { useContext } from 'react';

import {useForm} from 'react-hook-form'

import { AuthContext } from '../../../../../context/AuthContext';

import ProfilePictureWithChangeButton from '../components/ProfilePictureWithChangeButton/ProfilePictureWithChangeButton';
import InputFormField from '../../../formField/InputFormField/InputFormField';
import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import styles from '../AccountSettings/AccountSettings.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    displayName:string
    firstName:string
    lastName:string
    email:string
    phone:string
    picture:string
}

const AccountSettings:React.FC = () => {

    const {user,isUserCustomer1} =useContext(AuthContext)

    const defaultValues= {
            displayName:user?.accountSettings.displayName ||'',
            firstName:user?.accountSettings.firstName ||'',
            lastName:user?.accountSettings.lastName ||'',
            email:user?.accountSettings.email ||'',
            phone:user?.accountSettings.phone ||'',
            picture:user?.accountSettings.photoURL ||'',
        }

    const {register, formState:{errors},handleSubmit, setValue} = useForm<FormValues>({
        defaultValues
    });


    const onSubmit: SubmitHandler<FormValues> =(data)=>{

        const dataArray = Object.values(data)
        const defaultValuesArray = Object.values(defaultValues)

        //!if there are data need check else
        const isSimilar = dataArray.every((value, i) => value === defaultValuesArray[i]);

        console.log(isSimilar) 
    }

    return (
        <section className={styles.AccountSettings}>
            <h2>Account Settings</h2>

            <Divider type='horizontal' className={styles._divider}/>

            <form className={styles._form} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles._container}>

                    <div className={styles._info}>

                        <div>
                            <label>Display Name</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Display Name'
                                            isErrors={!!errors?.displayName}
                                            register={{...register('displayName', getValidationOptions(/^(?!.*\s{2,})[^ ].*[^ ]\s*$/, "display name (minimum 2 characters and not an empty string and maximum one space)", false))}}
                                            errorMessage={errors.displayName?.message}
                                            maxLength={30}
                                            disabled={isUserCustomer1}
                            />
                        </div>

                        <div>
                            <label>First Name</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='First Name'
                                            isErrors={!!errors?.firstName}
                                            register={{...register('firstName', getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, "name (2 characters minimum and not an empty string)", false))}}
                                            errorMessage={errors.firstName?.message}
                                            maxLength={50}
                                            disabled={isUserCustomer1}
                            />
                        </div>

                        <div>
                            <label>Last Name</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Last Name'
                                            isErrors={!!errors?.lastName}
                                            register={{...register('lastName',  getValidationOptions( /^(?!\s*$)[a-zA-Z\s]+$/, " last name (2 characters minimum and not an empty string)", false))}}
                                            errorMessage={errors.lastName?.message}
                                            maxLength={50}
                                            disabled={isUserCustomer1}
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Email'
                                            isErrors={!!errors?.email}
                                            register={{...register('email',getValidationOptions(/^\S+@\S+\.\S+$/, "email", false))}}
                                            errorMessage={errors.email?.message}
                                            maxLength={50}
                                            disabled={isUserCustomer1}
                            />
                        </div>

                        <div>
                            <label>Phone</label>
                            <InputFormField className=''
                                            inputType='string'
                                            placeholder='Phone'
                                            isErrors={!!errors?.phone}
                                            register={{...register('phone',getValidationOptions(/^(\+)?(\s*\d\s*){7,15}$/, "phone", false))}}
                                            errorMessage={errors.phone?.message}
                                            maxLength={50}
                                            disabled={isUserCustomer1}
                            />
                        </div>
                    </div>

                    <ProfilePictureWithChangeButton register={{...register('picture')}} setValue={setValue} photoURL={user?.accountSettings.photoURL ||''} disabled={isUserCustomer1} />

                </div>

                <div className={styles._buttonSubmit}>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='submit' text='Save Changes'  disabled={isUserCustomer1}/>
                </div>
                
                {isUserCustomer1 ? <FormValidationMessage error='Changing data for the test account is blocked.'/> :null}
            </form>

        </section>
    )
}

export default AccountSettings;

