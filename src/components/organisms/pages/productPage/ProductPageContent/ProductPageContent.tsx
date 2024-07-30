import ProductDetails from "../../../ProductDetails/ProductDetails"
import ProductInfo from "../ProductInfo/ProductInfo"
import RelatedProducts from "../RelatedProducts/RelatedProducts"

import styles from '../ProductPageContent/ProductPageContent.module.scss';

import type { ProductDataType } from "../../../../../types/product/productDataTypes"
import { CategoryProductValue } from "../../../../../types/product/categoryProductValueTypes";


interface ProductInfoData {
    weight: string
    color: string
    type: string
    category: string
    stockStatus: string
    tag: string[]
}

const ProductPageContent: React.FC<{data:ProductDataType}>=({data})=>{
    const dataCategory = data.category as CategoryProductValue;

    const productInfoData: ProductInfoData = {
        weight: data.weight,
        color: data.color,
        type: data.type,
        category: data.category,
        stockStatus: data.stockStatus,
        tag: data.tag
    }

    const productCategory: CategoryProductValue = dataCategory || CategoryProductValue.FRUIT

    return (
        <section className={styles.ProductPageContent}>
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

export default ProductPageContent;