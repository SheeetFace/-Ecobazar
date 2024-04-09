import ShoppingCart from '../../organisms/pages/shoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartTotal from '../../molecules/pages/shoppingCart/ShoppingCartTotal/ShoppingCartTotal';
import CouponCodeField from '../../molecules/pages/shoppingCart/CouponCodeField/CouponCodeField';

import styles from '../ShoppingCartPage/ShoppingCartPage.module.scss';

const ShoppingCartPage:React.FC = () => {

    return (
        <section className={styles.ShoppingCartPage}>
            <div className='center'>
                <h1>My Shopping Cart</h1>

                <div className={styles._container}>
                    <div className={styles._contentRight}>
                        <ShoppingCart/>
                        <CouponCodeField/>
                    </div>
                    
                    <div className={styles._shoppingCartTotalContainer}>
                        <ShoppingCartTotal/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ShoppingCartPage;