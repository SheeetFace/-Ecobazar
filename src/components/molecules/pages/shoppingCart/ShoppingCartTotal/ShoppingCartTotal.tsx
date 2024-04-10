import { NavLink } from 'react-router-dom';

import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';
import Button from '../../../../atoms/Button/Button';

import styles from '../ShoppingCartTotal/ShoppingCartTotal.module.scss';

const ShoppingCartTotal:React.FC = () => {

    return (
        <section className={styles.ShoppingCartTotal}>
            <h3>Cart Total</h3>

            <PaymentSummary/>

            <NavLink to='/checkout' className={styles._navLink}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                        text='Proceed to checkout'
                        type='button'/>
            </NavLink>
        </section>
    )
}

export default ShoppingCartTotal;