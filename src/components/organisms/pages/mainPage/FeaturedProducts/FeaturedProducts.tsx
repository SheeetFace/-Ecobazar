import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

// import { featuredProductsData } from '../../../../../data/temp/featuredProductsData';
import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../FeaturedProducts/FeaturedProducts.module.scss';


const FeaturedProducts:React.FC = () => {

  const featuredProductsData = shopProductData.slice(0,5)

    const renderFeaturedProducts = ()=>{
        return featuredProductsData.map((item, i)=>{
          return(
              <ProductsCard  key={i}
                              {...item}
              />
          )
        })
      }

    return (
        <section className={styles.FeaturedProducts}>
            <div className='center'>
                <TitleWithViewAll title='Featured Products' path='/'/>
                
                <div className={styles._cards}>
                  {renderFeaturedProducts()}
              </div>
            </div>

        </section>
    )
}

export default FeaturedProducts;