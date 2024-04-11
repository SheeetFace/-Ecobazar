import BillingInfo from '../../organisms/pages/checkoutPage/BillingInfo/BillingInfo';
import OrderSummery from '../../organisms/pages/checkoutPage/OrderSummery/OrderSummery';

import styles from '../CheckoutPage/CheckoutPage.module.scss';

const CheckoutPage:React.FC = () => {

    return (
        <section className={styles.CheckoutPage}>
            <div className='center'>
                <div className={styles._container}>

                    <div className={styles._billingInfo}>
                       <BillingInfo/>
                    </div>

                    <div className={styles._orderSummery}>
                        <OrderSummery/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CheckoutPage;