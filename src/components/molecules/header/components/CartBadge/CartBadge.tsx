import { useAppSelector } from '../../../../../store/store';

import CartIcon from '../../../../atoms/icon/navigate/CartIcon';
import ItemCountBadge from '../../../../atoms/header/ItemCountBadge/ItemCountBadge';

import styles from '../styles/styles.module.scss'

const CartBadge:React.FC = () =>{

    const count = useAppSelector((state)=> state.cart.items.length)

     return(
        <div className={styles.ComponentBadge}>
            <CartIcon className={styles._iconHover} />
            <div className={styles._count}>
                <ItemCountBadge count = {count} />
            </div>
        </div>
     )
}
export default CartBadge;