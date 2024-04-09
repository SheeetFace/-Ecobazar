import Divider from '../../../../atoms/Divider/Divider';
import PaymentMethodForm from './components/PaymentMethodForm/PaymentMethodForm';
import Button from '../../../../atoms/Button/Button';

import styles from '../OrderSummery/OrderSummery.module.scss';

const OrderSummery:React.FC = () => {

    return (
        <section className={styles.OrderSummery}>
            <h3>Order Summary</h3>

            <div className={styles._container}>
                <div className={styles._subTotal}>
                    <span>Subtotal:</span>
                    <span className={styles._cost}>$84.00</span>
                </div>
                <Divider type='horizontal' className={styles._divider}/>
                <div className={styles._shipping}>
                    <span>Shipping:</span>
                    <span className={styles._cost}>Free</span>
                </div>
                <Divider type='horizontal' className={styles._divider}/>
                <div className={styles._total}>
                    <span>Total:</span>
                    <span className={styles._totalCost}>$84.00</span>
                </div>
            </div>

            <PaymentMethodForm/>

            <div>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                        text='Proceed to checkout'
                        type='button'/>
            </div>

        </section>
    )
}

export default OrderSummery;