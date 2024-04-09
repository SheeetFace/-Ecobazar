
import styles from '../PaymentMethodForm/PaymentMethodForm.module.scss';

const PaymentMethodForm:React.FC = () => {

    return (
        <div className={styles.PaymentMethodForm}>
            <h3>Payment Method</h3>

            <form className={styles._form}>
                <div className={styles._container}>
                    <input className={styles._radio} type="radio" id="paymentMethod1" name="method" value="cash" />
                    <span>Cash On Delivery</span>
                </div>
                <div className={styles._container}>
                    <input className={styles._radio} type="radio" id="paymentMethod2" name="method" value="paypal" />
                    <span>Paypal</span>
                </div>
                <div className={styles._container}>
                    <input className={styles._radio} type="radio" id="paymentMethod3" name="method" value="amazon pay" />
                    <span>Amazon Pay</span>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethodForm;