import { memo } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../../../store/store';
import { setPaymentMethodValid } from '../../../../../../../store/slices/checkoutFormSlice';

import styles from '../PaymentMethodForm/PaymentMethodForm.module.scss';

const PaymentMethodForm:React.FC = () => {

    const dispatch = useAppDispatch();
    const paymentMethodValid = useAppSelector((state) => state.checkoutForm.paymentMethodValid);

    console.log(paymentMethodValid)

    const handleMethod = (method:string)=>{
        dispatch(setPaymentMethodValid(method));
    }

    return (
        <div className={styles.PaymentMethodForm}>
            <h3>Payment Method</h3>

            <form className={styles._form}>
                <div className={styles._container}>
                    <input className={styles._radio} type="radio" id="paymentMethod1" name="method" value="cash" onClick={()=>handleMethod("cash")} />
                    <span>Cash On Delivery</span>
                </div>
                <div className={styles._container}>
                    <input className={styles._radio} type="radio" id="paymentMethod2" name="method" value="paypal" onClick={()=>handleMethod("paypal")}/>
                    <span>Paypal</span>
                </div>
                <div className={styles._container}>
                    <input className={styles._radio} type="radio" id="paymentMethod3" name="method" value="amazon pay" onClick={()=>handleMethod("amazon pay")}/>
                    <span>Amazon Pay</span>
                </div>
            </form>
        </div>
    )
}

export default memo(PaymentMethodForm);
