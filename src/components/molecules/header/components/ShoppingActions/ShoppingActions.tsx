import { NavLink } from "react-router-dom";

import WishListBadge from "../WishListBadge/WishListBadge";
import Divider from "../../../../atoms/Divider/Divider";
import CartBadge from "../CartBadge/CartBadge";
import CartSummary from "../../../../atoms/header/CartSummary/CartSummary";

import styles from '../ShoppingActions/ShoppingActions.module.scss'

const ShoppingActions:React.FC = () =>{
    return(
        <div className={styles.ShoppingActions}>
            <NavLink to='wishlist' className={styles._wishlistIcon}>
                <WishListBadge/>
            </NavLink>
            
            <Divider type='vertical' className={styles._divider}/>

            <NavLink to='shoppingcart'>
                <CartBadge/>
            </NavLink>

            <CartSummary/>
        </div>
    )
}
export default ShoppingActions;