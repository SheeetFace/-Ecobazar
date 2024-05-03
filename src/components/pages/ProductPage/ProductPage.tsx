import { useLocation } from 'react-router-dom';

import ProductDetails from '../../organisms/ProductDetails/ProductDetails';
import ProductInfo from '../../organisms/pages/productPage/ProductInfo/ProductInfo';

import styles from '../ProductPage/ProductPage.module.scss';

interface ProductInfoData {
    weight: string
    color: string
    type: string
    category: string
    stockStatus: string
    tag: string[]
}


const ProductPage:React.FC = () => {

    const LocationState = useLocation();

    const data = LocationState.state.data;

    const productInfoData:ProductInfoData={
        weight: data.weight,
        color: data.color,
        type: data.type,
        category: data.category,
        stockStatus: data.stockStatus,
        tag: data.tag
    }

    return (
        <section className={styles.ProductPage}>
            <div className='center'>
                <div className={styles._container}>
                    <ProductDetails data={data} viewMode='page'/>
                    <ProductInfo data={productInfoData}/>
                </div>
            </div>
            
        </section>
    )
}

export default ProductPage;