import useApiResource from '../../../../../hooks/useApiResource';

import { useGetProductsQuery } from '../../../../../api/products/productApi';

import SaleProductCard from '../../../../molecules/card/SaleProductCard/SaleProductCard';

import styles from '../SaleProducts/SaleProducts.module.scss';

import type { ProductDataType } from '../../../../../types/productDataTypes';
import { useMemo } from 'react';

const SaleProducts:React.FC = () => {

    const {responseData, content} = useApiResource<ProductDataType>(useGetProductsQuery, 'products');

    const renderSaleProductsCard = useMemo(()=>{
        if(responseData){
            const saleProductsShopData = [responseData[2],responseData[9],responseData[12]];

            return saleProductsShopData.map((item)=>{
                return(
                    <SaleProductCard key={item.id} {...item}/>
                )
            })
        }
    },[responseData])

    return (
        <section className={styles.SaleProducts}>
            <h2>Sale Products</h2>

            <div className={styles._container}>
                {content}
                {responseData ? renderSaleProductsCard :null}
                {/* {renderSaleProductsCard()} */}
            </div>

        </section>
    )
}

export default SaleProducts;