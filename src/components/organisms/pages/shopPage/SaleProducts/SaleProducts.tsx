
import SaleProductCard from '../../../../molecules/card/SaleProductCard/SaleProductCard';

import { saleProductsShopData } from '../../../../../data/temp/saleProductsShopData';

import styles from '../SaleProducts/SaleProducts.module.scss';

const SaleProducts:React.FC = () => {

    const renderSaleProductsCard =()=>{
        return saleProductsShopData.map((item,i)=>{
            return(
                <SaleProductCard    name={item.name}
                                    id={item.id}
                                    src={item.src}
                                    currentCost={item.currentCost}
                                    oldCost={item.oldCost}
                                    rating={item.rating}
                                    key={i}
                />
            )
        })
    }

    return (
        <section className={styles.SaleProducts}>
            <h2>Sale Products</h2>

            <div className={styles._container}>
                {renderSaleProductsCard()}
            </div>

        </section>
    )
}

export default SaleProducts;