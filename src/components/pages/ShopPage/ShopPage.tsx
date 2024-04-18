import FilterProducts from '../../organisms/pages/shopPage/FilterProducts/FilterProducts';

import styles from '../ShopPage/ShopPage.module.scss';

const ShopPage:React.FC = () => {

    return (
        <section className={styles.ShopPage}>
           <div className='center'>
                <div className={styles._container}>
                    <div className={styles._filters}>
                        <FilterProducts/>
                    </div>

                </div>
           </div>
        </section>
    )
}

export default ShopPage;