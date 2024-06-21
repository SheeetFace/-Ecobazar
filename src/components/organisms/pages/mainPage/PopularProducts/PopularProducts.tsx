import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

// import { popularProductsData } from '../../../../../data/temp/popularProductsData';
import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../PopularProducts/PopularProducts.module.scss';

const PopularProducts:React.FC = () => {

  const popularProductsData = shopProductData.slice(0,10)

  const renderPopularProducts = ()=>{
    return popularProductsData.map((item, i)=>{
      return(
          <ProductsCard key={i}
                        {...item}
          />
      )
    })
  }

  return (
    <section className={styles.PopularProducts}>
        <div className='center'>
            <TitleWithViewAll title='Popular Products' path='/shop'/>
            
              <div className={styles._cards}>
                  {renderPopularProducts()}
              </div>
        </div>

    </section>
  )
}

export default PopularProducts;