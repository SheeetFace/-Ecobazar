import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import BigProductCard from '../../../../molecules/card/BigProductCard/BigProductCard';
import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

// import { hotDealsData } from '../../../../../data/temp/hotDealsData';
import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../HotDeals/HotDeals.module.scss';


const HotDeals:React.FC = () => {

  const hotDealsData = shopProductData.slice(0,7)

    const renderHotDeals = ()=>{
        return hotDealsData.map((item, i)=>{
          if( i > 0){
            return(
              <ProductsCard key={i}
                            {...item}
              />
            )
          }
        })
      }

    return (
        <div className={styles.HotDeals}>
            <div className='center'>
                <TitleWithViewAll title='Hot Deals' path='/'/>

                <div className={styles._container}>
                    <div className={styles._bigCard}>
                        <BigProductCard 
                                        id={hotDealsData[0].id}
                                        name={hotDealsData[0].name}
                                        src={hotDealsData[0].src}
                                        currentCost={hotDealsData[0].currentCost}
                                        oldCost={hotDealsData[0].oldCost}
                                        sale={hotDealsData[0].sale}
                                        rating={hotDealsData[0].rating}/>
                    </div>
                    

                    <div className={styles._cards}>
                        {renderHotDeals()}
                    </div>
                    
                </div>


                {/* <div className={styles._container}>
          <div className={styles.bigCardContainer}>
            <BigProductCard />
          </div>
          <div className={styles.smallCardsContainer}>
            {renderHotDeals()}
          </div>
        </div> */}

            </div>
        </div>
    )
}

export default HotDeals;