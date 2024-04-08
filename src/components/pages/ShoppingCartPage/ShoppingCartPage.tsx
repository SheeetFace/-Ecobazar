import ShoppingCard from '../../organisms/pages/shoppingCard/ShoppingCard/ShoppingCard';
import ShoppingCardTotal from '../../molecules/pages/shoppingCard/ShoppingCardTotal/ShoppingCardTotal';

import styles from '../ShoppingCartPage/ShoppingCartPage.module.scss';

const ShoppingCartPage:React.FC = () => {

    return (
        <section className={styles.ShoppingCartPage}>
            <div className='center'>
                <h1>My Shopping Cart</h1>

                <div className={styles._container}>
                    <ShoppingCard/>
                    <ShoppingCardTotal/>
                </div>

            </div>

        </section>
    )
}

export default ShoppingCartPage;