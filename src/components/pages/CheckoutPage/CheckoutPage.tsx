import { useEffect } from 'react';

import { useAppSelector } from '../../../store/store';
import { selectItemsLength } from '../../../store/slices/cartSlice';

import { useNavigate } from 'react-router-dom';

import BillingInfo from '../../organisms/pages/checkoutPage/BillingInfo/BillingInfo';
import OrderSummery from '../../organisms/pages/checkoutPage/OrderSummery/OrderSummery';

import styles from '../CheckoutPage/CheckoutPage.module.scss';

const CheckoutPage:React.FC = () => {

    const isItems = useAppSelector((state)=>selectItemsLength(state));

    const navigate = useNavigate()

    useEffect(()=>{
        if(isItems ===0) navigate('/shopping-cart')
    },[isItems])

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
