import Divider from '../../../../atoms/Divider/Divider';

import styles from '../ShoppingCard/ShoppingCard.module.scss';

const ShoppingCard:React.FC = () => {

    return (
        <section className={styles.ShoppingCard}>
            
            <div className={styles._header}>
                <div className={styles._product}>
                    <span>PRODUCT</span>
                </div>
                <div className={styles._cost}>
                    <span>PRICE</span>
                </div>
                <div className={styles._quantity}>
                    <span>QUANTITY</span>
                </div>
                <div className={styles._subtotal}>
                    <span>SUBTOTAL</span>
                </div>
            </div>
            1
            <Divider type='horizontal' className={styles._divider}/>
            2
        </section>
    )
}

export default ShoppingCard;