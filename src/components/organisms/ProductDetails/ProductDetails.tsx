import ProductDetailsHeader from '../../molecules/productDetails/ProductDetailsHeader/ProductModalHeader';
import ProductDetailsDescription from '../../molecules/productDetails/ProductDetailsDescription/ProductDetailsDescription';
import ProductDetailsButtons from '../../molecules/productDetails/ProductDetailsButtons/ProductDetailsButtons';
import ProductDetailsFooter from '../../molecules/productDetails/ProductDetailsFooter/ProductModalFooter';
import ProductDetailsSlider from '../../molecules/productDetails/ProductDetailsSlider/ProductDetailsSlider';
import ProductImageZoom from './components/ProductImageZoom/ProductImageZoom';
import Divider from '../../atoms/Divider/Divider';

import styles from '../ProductDetails/ProductDetails.module.scss';

import type { ProductDataType } from '../../../types/product/productDataTypes';
import type { RefObject } from 'react';

type ProductDetailsViewMode = 'modal' | 'page';

interface ProductDetailsProps{
    forwardRef?:RefObject<HTMLDivElement>,
    data: ProductDataType,
    viewMode: ProductDetailsViewMode
}

const ProductDetails:React.FC<ProductDetailsProps> = ({forwardRef,data,viewMode}) => {

    const classs = `${styles.ProductDetails} ${viewMode ==='page' ?styles._pageViewMode : styles._modalViewMode}`

    const isStockStatus = +data.stockStatus > 0;

    return (
        <section className={classs} ref={forwardRef}>
            
            <div className={styles._slider}>
                <ProductDetailsSlider src={data.src}/>
            </div>

            <div className={styles._zoom}>
                 <ProductImageZoom name={data.name} src={data.src}/>
            </div>
           

            <div className={styles._container}>
                <>
                    <ProductDetailsHeader name={data.name}
                                        currentCost={data.currentCost}
                                        oldCost={data.oldCost}
                                        sale={data.sale}
                                        rating={data.rating}
                                        stockStatus={data.stockStatus}
                                        />
                    
                    <Divider type='horizontal' className={styles._divider}/>
                </>

                <>
                    <ProductDetailsDescription description={data.description}/>

                    <Divider type='horizontal' className={styles._divider}/>
                </>

                <>
                    <ProductDetailsButtons id={data.id} isStockStatus={isStockStatus}/>

                    <Divider type='horizontal' className={styles._divider}/>
                </>

                <ProductDetailsFooter   category={data.category} tag={data.tag}/>

            </div>
        </section>
    )
}

export default ProductDetails;