import CartIcon from '../../../../atoms/icon/navigate/CartIcon';
import ItemCountBadge from '../../../../atoms/header/ItemCountBadge/ItemCountBadge';

import styles from '../styles/styles.module.scss'

const CartBadge:React.FC = () =>{

     return(
        <div className={styles.ComponentBadge}>
            <CartIcon className={styles._iconHover} />
            <div className={styles._count}>
                <ItemCountBadge count = {123} />
            </div>
        </div>
     )
}
export default CartBadge;