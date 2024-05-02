import { useLocation } from 'react-router-dom';

import ProductDetails from '../../organisms/ProductDetails/ProductDetails';
import ProductInfo from '../../organisms/pages/productPage/ProductInfo/ProductInfo';

import styles from '../ProductPage/ProductPage.module.scss';

const ProductPage:React.FC = () => {

    const data = useLocation()

    return (
        <section className={styles.ProductPage}>
            <div className='center'>
                <div className={styles._container}>
                    <ProductDetails data={data.state.data}/>
                    <ProductInfo/>
                </div>
            </div>
            
        </section>
    )
}

export default ProductPage;