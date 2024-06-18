import PaymentSummary from '../../../../molecules/pages/components/PaymentSummary/PaymentSummary';
import PaymentMethodForm from './components/PaymentMethodForm/PaymentMethodForm';
import SubmitOrderForm from './components/SubmitOrderForm/SubmitOrderForm';

import styles from '../OrderSummery/OrderSummery.module.scss';

const OrderSummery:React.FC = () => {

    return (
        <section className={styles.OrderSummery}>
            <h3>Order Summary</h3>

            <PaymentSummary/>

            <PaymentMethodForm/>

            <SubmitOrderForm/>

        </section>
    )
}

export default OrderSummery;
