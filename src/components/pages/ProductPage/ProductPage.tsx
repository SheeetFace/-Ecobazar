import { useLocation } from 'react-router-dom';

import useScrollToTop from '../../../hooks/useScrollToTop';

import ProductDetails from '../../organisms/ProductDetails/ProductDetails';
import ProductInfo from '../../organisms/pages/productPage/ProductInfo/ProductInfo';
import RelatedProducts from '../../organisms/pages/productPage/RelatedProducts/RelatedProducts';

import styles from '../ProductPage/ProductPage.module.scss';

import type { ProductDataType } from '../../../types/productDataTypes';
import { CategoryProductValue } from '../../../types/categoryProductValueTypes';

interface ProductInfoData {
    weight: string
    color: string
    type: string
    category: string
    stockStatus: string
    tag: string[]
}


const ProductPage:React.FC = () => {

    useScrollToTop(0,'instant')

    const locationState = useLocation();

    const data:ProductDataType = locationState.state.data;
    const dataCategory = data.category as CategoryProductValue;

    const productInfoData:ProductInfoData={
        weight: data.weight,
        color: data.color,
        type: data.type,
        category: data.category,
        stockStatus: data.stockStatus,
        tag: data.tag
    }

    const productCategory:CategoryProductValue = dataCategory ? dataCategory: CategoryProductValue.FRUIT

    return (
        <section className={styles.ProductPage}>
            <div className='center'>
                <div className={styles._container}>
                    <ProductDetails data={data} viewMode='page'/>
                    <ProductInfo data={productInfoData}/>
                    <RelatedProducts productCategory={productCategory}/>
                </div>
            </div>
            
        </section>
    )
}

export default ProductPage;