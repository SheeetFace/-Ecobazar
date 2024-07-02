import { useMemo } from 'react';

import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import useFilteredPromotedData from '../../../../../hooks/useFilteredPromotedData';

import { FilterPromotedTypes } from '../../../../../types/filterPromotedType';

import styles from '../PopularProducts/PopularProducts.module.scss';

const PopularProducts:React.FC = () => {

  const {filteredData,content} = useFilteredPromotedData(FilterPromotedTypes.popular)

  const renderPopularProducts = useMemo(()=>{
      return filteredData.map((item)=>{
        return(
            <ProductsCard key={item.id}
                          {...item}
            />
        )
    })
  },[JSON.stringify(filteredData)])

  return (
    <section className={styles.PopularProducts}>
        <div className='center'>
            <TitleWithViewAll title='Popular Products' path='/shop'/>
            
              <div className={styles._cards}>
                  {content}
                  {renderPopularProducts}
              </div>
        </div>

    </section>
  )
}

export default PopularProducts;