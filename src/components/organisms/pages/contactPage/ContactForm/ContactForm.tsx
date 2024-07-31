import {useForm} from 'react-hook-form'

import InputFormField from '../../../formField/InputFormField/InputFormField';
import TextAreaFormField from '../../../formField/TextAreaFormField/TextAreaFormField';
import Button from '../../../../atoms/Button/Button';

import { getValidationOptions } from '../../../../../utils/getValidationOptions';

import styles from '../ContactForm/ContactForm.module.scss';

import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    name:string
    email:string
    title:string
    subject:string
}

const ContactForm:React.FC = () => {

    const {register, formState:{errors},handleSubmit, reset} = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> =(data)=>{
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <section className={styles.ContactForm}>
            <div className={styles._message}>
                <h1>Just Say Hello!</h1>
                <span>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</span>
            </div>

            <form className={styles._form} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles._top}>
                    <InputFormField 
                        className={styles._width}
                        inputType='text'
                        placeholder='Your Name'
                        isErrors={!!errors?.name}
                        register={{...register('name', getValidationOptions( /^[\p{L}]{2,}$/u, "name (2 characters minimum and no spaces)"))}}
                        errorMessage={errors.name?.message}
                    />
                    <InputFormField 
                        className={styles._width}
                        inputType='text'
                        placeholder='Your Email'
                        isErrors={!!errors?.email}
                        register={{...register('email',  getValidationOptions(/^\S+@\S+\.\S+$/, "email"))}}  
                        errorMessage={errors.email?.message}
                    />
                </div>
                
                <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Title'
                        isErrors={!!errors?.title}
                        register={{...register('title', getValidationOptions(/^(?!\s*$)\S.*\s*$/, "title (minimum 2 characters and not an empty string)"))}}
                        errorMessage={errors.title?.message}
                />

                <TextAreaFormField
                  maxLength={500}
                  placeholder='Subjects'
                  isErrors={!!errors?.subject}
                  register={{...register('subject', getValidationOptions( /^(?!\s*$\r?\n?)\S(?:[\s\S])*$/, "subject (minimum 2 characters and not an empty string)"))}}
                  errorMessage={errors.subject?.message}
                />
            
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' 
                        type='submit' 
                        text='Send Message'
                        ariaLabel='Send Message button'
                />
            </form>
        </section>
    )
}

export default ContactForm;