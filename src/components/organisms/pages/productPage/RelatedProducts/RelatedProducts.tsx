import { useMemo } from 'react';

import useSlider from '../../../../../hooks/useSlider';
import useApiResource from '../../../../../hooks/api/useApiResource';
import { useGetProductsQuery } from '../../../../../api/products/productApi';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import styles from '../RelatedProducts/RelatedProducts.module.scss';

import type { CategoryProductValue } from '../../../../../types/product/categoryProductValueTypes';
import type { ProductDataType } from '../../../../../types/product/productDataTypes';

interface RelatedProductsProps{
    productCategory:  CategoryProductValue
}

const RelatedProducts:React.FC<RelatedProductsProps> = ({productCategory}) => {

    const { responseData, content } = useApiResource<ProductDataType>(useGetProductsQuery, 'products');

    const relatedData = useMemo(()=>{
        return responseData?.filter((item) => item.category.includes(productCategory)).slice(0, 6) || [];
    },[responseData,productCategory])

    const renderRelatedProducts = useMemo(()=>{
        return relatedData.map((item)=>(<ProductsCard key={item.id} {...item}/>))
    },[relatedData])

    const useSlicer = useSlider({ cards: renderRelatedProducts,
        styles: styles._settingSlider,
        slidesToShow: 5,
        dots:true
    });

    return (
        <section className={styles.RelatedProducts}>
            <h2>Related Products</h2>
            {content}
            {useSlicer}
        </section>
    )
}

export default RelatedProducts;