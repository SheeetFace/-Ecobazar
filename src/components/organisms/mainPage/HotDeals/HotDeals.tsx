import TitleWithViewAll from '../../../molecules/mainPage/TitleWithViewAll/TitleWithViewAll';
import BigProductCard from '../../../molecules/card/BigProductCard/BigProductCard';
import ProductsCard from '../../../molecules/card/ProductCard/ProductCard';

import { hotDealsData } from '../../../../data/temp/hotDealsData';

import styles from '../HotDeals/HotDeals.module.scss';

interface HotDealsDataItem{
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

const HotDeals:React.FC = () => {

    const renderHotDeals = ()=>{
        return hotDealsData.map((item:HotDealsDataItem, i)=>{
          if( i > 0){
            return(
              <ProductsCard   key={item.id}
                              id={item.id}
                              name={item.name}
                              src={item.src}
                              currentCost={item.currentCost}
                              oldCost={item.oldCost}
                              sale={item.sale}
                              rating={item.rating}
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