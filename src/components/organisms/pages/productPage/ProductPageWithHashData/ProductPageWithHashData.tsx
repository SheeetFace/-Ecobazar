import useFetchDataByHash from "../../../../../hooks/useFetchDataByHash";
import { useGetProductsQuery } from "../../../../../api/products/productApi";

import ProductPageContent from "../ProductPageContent/ProductPageContent";
import FullScreenLoader from "../../../FullScreenLoader/FullScreenLoader";

import type { ProductDataType } from "../../../../../types/product/productDataTypes";

const ProductPageWithHashData: React.FC<{ hash: string }> = ({ hash }) => {

    const {hashData, isLoading} = useFetchDataByHash<ProductDataType>(hash,useGetProductsQuery,'/shop')

    if(isLoading) return <FullScreenLoader/>;
    if(hashData) return <ProductPageContent data={hashData}/>;
    return null;
}

export default ProductPageWithHashData;