import { useAppSelector } from '../../../../../../store/store';

import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';

import { useCountCategories } from '../../../../../../hooks/useCountCategories';
import { useGetProductsQuery } from '../../../../../../api/products/productApi';


import type { ProductDataType } from '../../../../../../types/productDataTypes';


const ProductCategoriesFilter:React.FC = () => {

    const filter = useAppSelector((state)=>state.productFilter)
    const countCategory = useCountCategories<ProductDataType>(useGetProductsQuery,'products')

    return (<CategoriesFilter filter={filter} countCategory={countCategory}/>)
}

export default ProductCategoriesFilter;