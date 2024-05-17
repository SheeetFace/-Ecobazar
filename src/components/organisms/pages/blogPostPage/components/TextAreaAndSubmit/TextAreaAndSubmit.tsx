import {useForm} from 'react-hook-form'

import TextAreaFormField from '../../../../formField/TextAreaFormField/TextAreaFormField';
import Button from '../../../../../atoms/Button/Button';

import styles from '../TextAreaAndSubmit/TextAreaAndSubmit.module.scss';


import type {SubmitHandler}from 'react-hook-form';

interface FormValues{
    comment:string
}

const TextAreaAndSubmit:React.FC = () => {

    const {register, formState:{errors},handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> =(data)=>{
        
        const trimmedValue = data.comment.trim()
        if(trimmedValue){
            console.log(trimmedValue)
            reset()
        }else{
            console.log('not valid')
        }
    }

    return (
        <section className={styles.TextAreaAndSubmit}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Message</label>
                <TextAreaFormField  placeholder='Write your comment here…'
                                    maxLength={333}
                                    isErrors={!!errors?.comment}
                                    register={{...register('comment',
                                        { 
                                            pattern:{
                                                value: /^\s*\S.*$/,
                                                message: "Comment cannot be empty and must contain at least 1 character.",
                                            }
                                        }
                                    )}}
                                    errorMessage={errors.comment?.message}/>

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight ' type='submit' text='Post Comment'/>
            </form>
        </section>
    )
}

export default TextAreaAndSubmit;