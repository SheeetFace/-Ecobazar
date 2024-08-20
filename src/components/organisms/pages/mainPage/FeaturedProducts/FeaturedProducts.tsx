import { useMemo } from 'react';

import useSlider from '../../../../../hooks/useSlider';

import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import useFilteredPromotedData from '../../../../../hooks/products/useFilteredPromotedData';

import styles from '../FeaturedProducts/FeaturedProducts.module.scss';

import  { FilterPromotedTypes } from '../../../../../types/filterPromotedType';

import { commonProductSliderConfig } from '../../../../../config/slider/commonProductSliderConfig';


const FeaturedProducts:React.FC = () => {

  const {filteredData,content} = useFilteredPromotedData(FilterPromotedTypes.feature)

    const renderFeaturedProducts = useMemo(()=>{
        return filteredData.map((item)=>{
          return <ProductsCard key={item.id} {...item}/>
        })
    },[filteredData])

    const slider = useSlider({
      cards:renderFeaturedProducts,
      styles:'defaultSlider',
      slidesToShow:3,
      dots:true,
      responsiveSetting:commonProductSliderConfig,
      isSliderShow:false,
      sliderShowBreakpoint:991,
      cardsWithoutSliderStyles:styles._cards
    })
    
    return (
        <section className={styles.FeaturedProducts}>
            <div className='center'>
                <TitleWithViewAll title='Featured Products' path='/shop'/>
                
                <div className={styles._cards}>
                  {content}
                  {slider}
              </div>
            </div>

        </section>
    )
}

export default FeaturedProducts;