import { useMemo } from 'react';

import useFilteredPromotedData from '../../../../../hooks/products/useFilteredPromotedData';
import useSlider from '../../../../../hooks/useSlider';

import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import BigProductCard from '../../../../molecules/card/BigProductCard/BigProductCard';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import styles from '../HotDeals/HotDeals.module.scss';

import  { FilterPromotedTypes } from '../../../../../types/filterPromotedType';

import { commonProductSliderConfig } from '../../../../../config/slider/commonProductSliderConfig';


const HotDeals:React.FC = () => {

  const {filteredData,content} = useFilteredPromotedData(FilterPromotedTypes.hot)

    const renderHotDeals = useMemo(()=>{
        return filteredData.map((item, i)=>{
          if( i > 0) return <ProductsCard key={item.id} {...item}/>
        })
    },[filteredData])

    const slider = useSlider({
        cards:renderHotDeals,
        styles:'defaultSlider',
        slidesToShow:3,
        dots:true,
        responsiveSetting:commonProductSliderConfig,
        isSliderShow:false,
        sliderShowBreakpoint:991,
        cardsWithoutSliderStyles:styles._cards
    })

    return (
        <div className={styles.HotDeals}>
            <div className='center'>
                <TitleWithViewAll title='Hot Deals' path='/shop'/>
                {content}
                <div className={styles._container}>
                
                    <div className={styles._bigCard}>
                        <BigProductCard {...filteredData[0]}/>
                    </div>
                    
                    <div className={styles._cards}>
                      {slider}
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default HotDeals;