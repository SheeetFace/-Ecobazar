import CartIcon from '../../atoms/icon/navigate/CartIcon';
import ItemCountBadge from '../../atoms/ItemCountBadge/ItemCountBadge';

import styles from '../CartBadge/CartBadge.module.scss'

const CartBadge:React.FC = () =>{

     return(
        <div className={styles.CartBadge}>
            <CartIcon className={styles._iconHover} />
            <div className={styles._count}>
                <ItemCountBadge />
            </div>
        </div>
     )
}
export default CartBadge;