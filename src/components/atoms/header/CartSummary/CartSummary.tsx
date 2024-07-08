import useTotalPrice from '../../../../hooks/useTotalPrice'
import styles from '../CartSummary/CartSummary.module.scss'

const CartSummary:React.FC =()=>{
    const totalPrice = useTotalPrice()

    return(
        <div className={styles.CartSummary}>
            <span className={styles._shoppingCart}>Shopping cart:</span>
            <span className={styles._summary}>${totalPrice}</span>
        </div>
    )
}
export default CartSummary;