import { useContext } from 'react';

import { FormCheckoutContext } from '../../../../../context/FormCheckoutContext';

import PaymentSummary from '../../../../molecules/pages/components/PaymentSummary/PaymentSummary';
import PaymentMethodForm from './components/PaymentMethodForm/PaymentMethodForm';
import Button from '../../../../atoms/Button/Button';

import styles from '../OrderSummery/OrderSummery.module.scss';

const OrderSummery:React.FC = () => {

    const {isFormReady, resetFormState} = useContext(FormCheckoutContext);

    const submitOrder =()=>{
        console.log(`isFormReady  - ${isFormReady}`)
        if(isFormReady){
            console.log('submitOrder')
            //! navigate to http://localhost:5173/dashboard/orderDetail with ID
            resetFormState()
        }
    }

    return (
        <section className={styles.OrderSummery}>
            <h3>Order Summary</h3>

            <PaymentSummary/>

            <PaymentMethodForm/>

            <div>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                        text='Proceed to checkout'
                        type='button'
                        onClick={()=>submitOrder()}/>
            </div>

        </section>
    )
}

export default OrderSummery;
