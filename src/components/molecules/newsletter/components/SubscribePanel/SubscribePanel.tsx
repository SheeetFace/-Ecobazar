import { useRef } from 'react';

import useValidation from '../../../../../hooks/useValidation';

import Input from '../../../../atoms/Input/Input';
import Button from '../../../../atoms/Button/Button';

import styles from '../SubscribePanel/SubscribePanel.module.scss';

import { ValidateSearchOrSubscribeTypes } from '../../../../../types/validateSearchOrSubscribeTypes';

import type {FormEvent} from 'react';

const SubscribePanel = () =>{

    const ref = useRef<HTMLInputElement>(null);

    const {isValid, validateFn} = useValidation();

    const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        if(ref.current){
            const validationResult =validateFn(ref.current.value, ValidateSearchOrSubscribeTypes.SUBSCRIBE);
            
            if(validationResult.result){
                console.log(validationResult)
                ref.current.value = '';
            }else{
                if(validationResult.reason === 'inputEmpty'){
                    ref.current.value = '';
                }
            }
        }else{
            console.error('ref.current in handleSubmit SubscribePanel')
        }
    }


    return(
        <form className={styles.SubscribePanel}
              onSubmit={handleSubmit}>
            <div className={styles._input}>
                <Input  forwardRef={ref}  
                        className={isValid ?"_subscribeInput":"_invalidSubscribeInput"}
                        placeholder='Your email address'
                        type='text'/>
            </div>
            <div className={styles._button}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1'
                        text='Subscribe'
                        type='submit'/>
            </div>
        </form>
    )
}
export default SubscribePanel;