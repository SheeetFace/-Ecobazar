import { selectProductFilter,changeFilter } from '../../../store/slices/productFilterSlice';

import FilterProducts from '../../organisms/pages/shopPage/FilterProducts/FilterProducts';
import DiscountBanner from '../../molecules/banner/shopPage/DiscountBanner/DiscountBanner';
import SaleProducts from '../../organisms/pages/shopPage/SaleProducts/SaleProducts';
import HeaderShop from '../../organisms/pages/shopPage/HeaderShop/HeaderShop';
import Products from '../../organisms/pages/shopPage/Products/Products';
import FilterBar from '../../organisms/pages/components/FilterBar/FilterBar';
import ResponsiveFilters from '../../organisms/pages/components/ResponsiveFilters/ResponsiveFilters';

import styles from '../ShopPage/ShopPage.module.scss';

import type { InitProductFilter } from '../../../types/product/productFilterType';

const ShopPage:React.FC = () => {

    return (
        <section className={styles.ShopPage}>
           <div className='center'>
                <div className={styles._container}>
                    <div className={styles._wrapper}>
                        <ResponsiveFilters FilterComponent={FilterProducts}/>
                        <div className={styles._additionalInfo}>
                            <DiscountBanner/>
                            <SaleProducts/>
                        </div>
                    </div>
                    
                    <div className={styles._content}>
                        <HeaderShop/>
                        <FilterBar<InitProductFilter>  selectFilter ={selectProductFilter} changeFilter={changeFilter} />
                        <Products/>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default ShopPage;