import { useState,useRef } from 'react';
import {useForm} from 'react-hook-form'

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
}

const AccountSettings:React.FC = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleFileSelect = () => {
      fileInputRef.current?.click();
    };
  
    //!NEER THIS CODE MOVE
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFile(file);
    console.log(file)
    };
    const {register, formState:{errors},handleSubmit} = useForm<FormValues>();

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
                    
                    <div className={styles._chooseIMG}>
                        <div className={styles._profileIMG}>
                            <img alt='profile photo' 
                            // src='https://cdn.discordapp.com/attachments/872343092500504628/1227957231207845938/image.png?ex=662a4b4a&is=6617d64a&hm=7192a45990350c4b175becc97d5efd6174b56583f05fd7075688aafcfec4b44d&'
                            src={
                                file
                                  ? URL.createObjectURL(file)
                                  : 'https://cdn.discordapp.com/attachments/872343092500504628/1227957231207845938/image.png?ex=662a4b4a&is=6617d64a&hm=7192a45990350c4b175becc97d5efd6174b56583f05fd7075688aafcfec4b44d&'
                                }
                            />
                        </div>

                        <div className={styles._file}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                            />
                            <Button onClick={handleFileSelect} className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='button' text='Chose Image'/>
                        </div>
                    </div>

                </div>

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='submit' text='Save Changes'/>
            </form>

        </section>
    )
}

export default AccountSettings;