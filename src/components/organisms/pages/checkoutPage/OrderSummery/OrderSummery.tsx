
import PaymentSummary from '../../../../molecules/pages/components/PaymentSummary/PaymentSummary';
import PaymentMethodForm from './components/PaymentMethodForm/PaymentMethodForm';
import Button from '../../../../atoms/Button/Button';

import styles from '../OrderSummery/OrderSummery.module.scss';

const OrderSummery:React.FC = () => {

    return (
        <section className={styles.OrderSummery}>
            <h3>Order Summary</h3>

            <PaymentSummary/>

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