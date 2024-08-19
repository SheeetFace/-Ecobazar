import { useMemo } from 'react';

import useFilteredPromotedData from '../../../../../hooks/products/useFilteredPromotedData';
import useSlider from '../../../../../hooks/useSlider';

import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import { FilterPromotedTypes } from '../../../../../types/filterPromotedType';

import styles from '../PopularProducts/PopularProducts.module.scss';

import { popularProductSliderConfig } from '../../../../../config/slider/PopularProductSliderConfig';

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


  const slider = useSlider({
    cards:renderPopularProducts,
    styles:'defaultSlider',
    slidesToShow:3,
    dots:true,
    responsiveSetting:popularProductSliderConfig,
    isSliderShow:false,
    sliderShowBreakpoint:991,
    cardsWithoutSliderStyles:styles._cards
  })

  return (
    <section className={styles.PopularProducts}>
        <div className='center'>
            <TitleWithViewAll title='Popular Products' path='/shop'/>
            
              <div className={styles._cards}>
                  {content}
                  {slider}
              </div>
        </div>

    </section>
  )
}

export default PopularProducts;