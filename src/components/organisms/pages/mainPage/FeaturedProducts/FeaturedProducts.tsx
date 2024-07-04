import { useMemo } from 'react';

import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import useFilteredPromotedData from '../../../../../hooks/useFilteredPromotedData';

import styles from '../FeaturedProducts/FeaturedProducts.module.scss';

import  { FilterPromotedTypes } from '../../../../../types/filterPromotedType';



const FeaturedProducts:React.FC = () => {

  const {filteredData,content} = useFilteredPromotedData(FilterPromotedTypes.feature)

    const renderFeaturedProducts = useMemo(()=>{
        return filteredData.map((item)=>{
          return <ProductsCard key={item.id} {...item}/>
        })
    },[filteredData])
    
    return (
        <section className={styles.FeaturedProducts}>
            <div className='center'>
                <TitleWithViewAll title='Featured Products' path='/shop'/>
                
                <div className={styles._cards}>
                  {content}
                  {renderFeaturedProducts}
              </div>
            </div>

        </section>
    )
}

export default FeaturedProducts;