import { useCallback } from 'react';
import {useForm} from 'react-hook-form'

import Input from '../../../../atoms/form/Input/Input';
import Button from '../../../../atoms/Button/Button';
import FormValidationMessage from '../../../../atoms/form/FormValidationMessage/FormValidationMessage';

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
    console.log('render')

    const getValidationOptions =useCallback((patterValue:RegExp,message:string)=>{
        const options ={   
            required:"This Field is Required",
            pattern: {
                value: patterValue,
                message: message
            }
        }
        return options
    },[]) 

    return (
        <section className={styles.ContactForm}>
            <div className={styles._message}>
                <h1>Just Say Hello!</h1>
                <span>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</span>
            </div>

            <form className={styles._form} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles._top}>
                    <div className={styles._width}>
                        <Input  className={styles._border}
                                type='text'
                                placeholder='Your Name'
                                register={{...register('name', getValidationOptions( /^[\p{L}]{2,}$/u, "Please enter a valid name (2 characters minimum and no spaces)"))}}
                        />
                        <FormValidationMessage error={errors?.name &&`${errors.name.message}`}/>
                    </div>

                    <div className={styles._width}>
                        <Input  className={styles._border}
                                type='text'
                                placeholder='Your Email'
                                register={{...register('email',  getValidationOptions(/\S+@\S+\.\S+/, "Please enter a valid email"))}}  
                        />
                        <FormValidationMessage error={errors?.email &&`${errors.email.message}`}/>
                     </div>
                </div>
                
                <div>
                    <Input  className={styles._border} 
                            type='text'
                            placeholder='Title'
                            register={{...register('title', getValidationOptions(/^(?!\s*$)\S.*\s*$/, "Please enter a valid title (minimum 2 characters and not an empty string)"))}}
                    />
                    <FormValidationMessage error={errors?.title &&`${errors.title.message}`}/>
                </div>

                <textarea   className={styles._border}
                            maxLength={500}
                            placeholder='Subjects'
                            {...register('subject', getValidationOptions( /^(?!\s*$\r?\n?)\S(?:[\s\S])*$/, "Please enter a valid subject (minimum 2 characters and not an empty string)"))}
                />
                <FormValidationMessage error={errors?.subject &&`${errors.subject.message}`}/>

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='submit' text='Send Message'/>
            </form>
        </section>
    )
}

export default ContactForm;