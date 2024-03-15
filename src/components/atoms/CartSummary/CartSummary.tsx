
import styles from '../CartSummary/CartSummary.module.scss'

const CartSummary:React.FC =()=>{

    return(
        <div className={styles.CartSummary}>
            <span className={styles._shoppingCart}>Shopping cart:</span>
            <span className={styles._summary}>$33.00</span>
        </div>
    )
}
export default CartSummary;