import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/store';
import { selectItemsLength } from '../../../../../store/slices/cartSlice';

import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';
import Button from '../../../../atoms/Button/Button';

import styles from '../ShoppingCartTotal/ShoppingCartTotal.module.scss';

const ShoppingCartTotal:React.FC = () => {

    const isItems = useAppSelector((state)=>selectItemsLength(state));

    return (
        <section className={styles.ShoppingCartTotal}>
            <h3>Cart Total</h3>

            <PaymentSummary/>

            <NavLink to='/checkout' className={styles._navLink}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth'
                        text='Proceed to checkout'
                        type='button'
                        disabled={!isItems}
                        ariaLabel='Proceed to checkout button'
                        />
                        
            </NavLink>
        </section>
    )
}

export default ShoppingCartTotal;