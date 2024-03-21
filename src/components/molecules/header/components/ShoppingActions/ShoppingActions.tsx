
import WishlistIcon from "../../../../atoms/icon/navigate/WishlistIcon";
import Divider from "../../../../atoms/Divider/Divider";
import CartBadge from "../CartBadge/CartBadge";
import CartSummary from "../../../../atoms/header/CartSummary/CartSummary";

import styles from '../ShoppingActions/ShoppingActions.module.scss'

const ShoppingActions:React.FC = () =>{
    return(
        <div className={styles.ShoppingActions}>
            <div className={styles._wishlistIcon}>
                <WishlistIcon className={styles._iconHover}/>
            </div>
            <Divider type='vertical' className={styles._divider}/>
            <CartBadge/>
            <CartSummary/>
        </div>
    )
}
export default ShoppingActions;