import BillingInfo from '../../organisms/pages/checkoutPage/BillingInfo/BillingInfo';
import OrderSummery from '../../organisms/pages/checkoutPage/OrderSummery/OrderSummery';

import { FormCheckoutProvider } from '../../../context/FormCheckoutContext';

import styles from '../CheckoutPage/CheckoutPage.module.scss';

const CheckoutPage:React.FC = () => {

    return (
        <section className={styles.CheckoutPage}>
            <div className='center'>
                <div className={styles._container}>
                    <FormCheckoutProvider>
                        <div className={styles._billingInfo}>
                        <BillingInfo/>
                        </div>

                        <div className={styles._orderSummery}>
                            <OrderSummery/>
                        </div>
                    </FormCheckoutProvider>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPage;
