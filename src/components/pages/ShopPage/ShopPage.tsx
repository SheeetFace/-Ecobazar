
import FilterProducts from '../../organisms/pages/shopPage/FilterProducts/FilterProducts';
import DiscountBanner from '../../molecules/banner/shopPage/DiscountBanner/DiscountBanner';
import SaleProducts from '../../organisms/pages/shopPage/SaleProducts/SaleProducts';
import Products from '../../organisms/pages/shopPage/Products/Products';


import styles from '../ShopPage/ShopPage.module.scss';

const ShopPage:React.FC = () => {

    return (
        <section className={styles.ShopPage}>
           <div className='center'>
                <div className={styles._container}>
                    <div className={styles._wrapper}>
                        <div className={styles._filters}>
                            <FilterProducts/>
                        </div>
                        <DiscountBanner/>

                        <SaleProducts/>

                    </div>


                    <div>
                        <Products/>
                    </div>

                </div>
           </div>
        </section>
    )
}

export default ShopPage;