import { NavLink } from "react-router-dom"; 

import { useAppSelector } from "../../../../../store/store";

import WishListBadge from "../WishListBadge/WishListBadge";
import Divider from "../../../../atoms/Divider/Divider";
import CartBadge from "../CartBadge/CartBadge";
import CartSummary from "../../../../atoms/header/CartSummary/CartSummary";

import styles from '../ShoppingActions/ShoppingActions.module.scss'

const ShoppingActions:React.FC = () =>{

    const isUser = useAppSelector((state)=> state.auth.isUser)

    return(
        <div className={styles.ShoppingActions}>
            <div className={styles._container}>
                <NavLink to={isUser ? 'wishlist' :'login'} className={styles._wishlistIcon}>
                    <WishListBadge/>
                </NavLink>
                
                <Divider type='vertical' className={styles._divider}/>

                <NavLink to={isUser ? 'shopping-cart' :'login'}>
                    <CartBadge/>
                </NavLink>
            </div>
            <CartSummary/>
            
        </div>
    )
}
export default ShoppingActions;