import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import { featuredProductsData } from '../../../../../data/temp/featuredProductsData';

import styles from '../FeaturedProducts/FeaturedProducts.module.scss';

interface FeaturedProductsDataItem{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
    promotedCategories:string[],
    weight:string,
    color:string,
    type:string,
    category:string,
    stockStatus:string,
    description:string,
}

const FeaturedProducts:React.FC = () => {

    const renderFeaturedProducts = ()=>{
        return featuredProductsData.map((item:FeaturedProductsDataItem)=>{
          return(
              <ProductsCard  key={item.id}
                                      id={item.id}
                                      name={item.name}
                                      src={item.src}
                                      currentCost={item.currentCost}
                                      oldCost={item.oldCost}
                                      sale={item.sale}
                                      rating={item.rating}
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