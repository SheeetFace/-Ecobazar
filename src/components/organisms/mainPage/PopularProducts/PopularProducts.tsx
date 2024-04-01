import TitleWithViewAll from '../../../molecules/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../molecules/card/ProductCard/ProductCard';

import { popularProductsData } from '../../../../data/temp/popularProductsData';

import styles from '../PopularProducts/PopularProducts.module.scss';


interface PopularProductsDataItem{
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

const PopularProducts:React.FC = () => {

  const renderPopularProducts = ()=>{
    return popularProductsData.map((item:PopularProductsDataItem)=>{
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
    <section className={styles.PopularProducts}>
        <div className='center'>
            <TitleWithViewAll title='Popular Products' path='/'/>
            
              <div className={styles._cards}>
                  {renderPopularProducts()}
              </div>
        </div>

    </section>
  )
}

export default PopularProducts;