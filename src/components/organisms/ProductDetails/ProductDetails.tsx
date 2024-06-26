import Zoom from "react-img-zoom-gdn";

import ProductDetailsHeader from '../../molecules/productDetails/ProductDetailsHeader/ProductModalHeader';
import ProductDetailsDescription from '../../molecules/productDetails/ProductDetailsDescription/ProductDetailsDescription';
import ProductDetailsButtons from '../../molecules/productDetails/ProductDetailsButtons/ProductDetailsButtons';
import ProductDetailsFooter from '../../molecules/productDetails/ProductDetailsFooter/ProductModalFooter';
import ProductDetailsSlider from '../../molecules/productDetails/ProductDetailsSlider/ProductDetailsSlider';
import Divider from '../../atoms/Divider/Divider';

import styles from '../ProductDetails/ProductDetails.module.scss';

import type { ProductDataType } from '../../../types/productDataTypes';
import type { RefObject } from 'react';

type ProductDetailsViewMode = 'modal' | 'page';

interface ProductDetailsProps{
    forwardRef?:RefObject<HTMLDivElement>,
    data: ProductDataType,
    viewMode: ProductDetailsViewMode
}

const ProductDetails:React.FC<ProductDetailsProps> = ({forwardRef,data,viewMode}) => {

    const classs = `${styles.ProductDetails} ${viewMode ==='page' ?styles._pageViewMode : styles._modalViewMode}`

    return (
        <section className={classs} ref={forwardRef}>

            <ProductDetailsSlider src={data.src}/>

            <div className={styles._img}>
                <Zoom img={data.src} zoomScale={1.5} width={400} height={400} alt={data.name}/>
                {/* <img alt={data.name} 
                    src={data.src}/> */}
            </div>

            <div>
                <div>
                    <ProductDetailsHeader name={data.name}
                                        currentCost={data.currentCost}
                                        oldCost={data.oldCost}
                                        sale={data.sale}
                                        rating={data.rating}
                                        stockStatus={data.stockStatus}
                                        />
                    
                    <Divider type='horizontal' className={styles._divider}/>
                </div>

                <div>
                    <ProductDetailsDescription description={data.description}/>

                    <Divider type='horizontal' className={styles._divider}/>
                </div>

                <div>
                    <ProductDetailsButtons id={data.id}/>

                    <Divider type='horizontal' className={styles._divider}/>
                </div>

                <div>
                    <ProductDetailsFooter category={data.category}
                                        tag={data.tag}/>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;