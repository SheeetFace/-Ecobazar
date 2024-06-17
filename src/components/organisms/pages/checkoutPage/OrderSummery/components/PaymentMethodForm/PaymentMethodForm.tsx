import { useContext } from 'react';

import { FormCheckoutContext } from '../../../../../../../context/FormCheckoutContext';

import styles from '../PaymentMethodForm/PaymentMethodForm.module.scss';


const PaymentMethodForm:React.FC = () => {

    const {setPaymentMethodValid} = useContext(FormCheckoutContext);

    const handleMethod = (method:string)=>{
        setPaymentMethodValid(method)
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

export default PaymentMethodForm;
