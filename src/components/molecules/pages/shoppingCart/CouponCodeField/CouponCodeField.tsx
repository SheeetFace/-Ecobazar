import { useRef } from 'react';

import useValidation from '../../../../../hooks/useValidation';

import Input from '../../../../atoms/form/Input/Input';
import Button from '../../../../atoms/Button/Button';

import styles from '../CouponCodeField/CouponCodeField.module.scss';

import { ValidateSearchOrSubscribeTypes } from '../../../../../types/validateSearchOrSubscribeTypes';

import type {FormEvent} from 'react';

const CouponCodeField:React.FC = () => {

    const ref = useRef<HTMLInputElement>(null);
    const {isValid, validateFn} = useValidation();

    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault() 
        if(ref.current){
            const validationResult =validateFn(ref.current.value, ValidateSearchOrSubscribeTypes.SEARCH);

            if(validationResult.result) alert(ref.current.value)

            ref.current.value = '';
            
        }else{
            console.error('ref.current in handleSubmit CouponCodeField')
        }
    }

    return (
        <section className={styles.CouponCodeField}>

            <span className={styles._title}>Coupon Code</span>

            <div className={styles._container}>
                <form className={styles._form} onSubmit={handleSubmit}>
                    <div className={styles._input}>
                        <Input  forwardRef={ref}
                                className={isValid ? "_couponCodeFieldInput":"_invalidCouponCodeFieldInput"}
                                placeholder='Enter Code'
                                type='text'/>
                    </div>
                    <div className={styles._button}>
                        <Button className='ButtonFilledOval fillGrey7 colorTextGrey1'
                                text='Apply Coupon'
                                type='submit'/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CouponCodeField;