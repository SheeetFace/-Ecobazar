import { NavLink } from 'react-router-dom';

import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';

import styles from '../ShoppingCardTotal/ShoppingCardTotal.module.scss';

const ShoppingCardTotal:React.FC = () => {

    return (
        <section className={styles.ShoppingCardTotal}>
            <h3>Cart Total</h3>

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

            <NavLink to='checkout' className={styles._navLink}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight'
                        text='Proceed to checkout'
                        type='button'/>
            </NavLink>
        </section>
    )
}

export default ShoppingCardTotal;