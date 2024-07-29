import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useGetProductsQuery } from "../../../../../api/products/productApi";

import ProductPageContent from "../ProductPageContent/ProductPageContent";
import FullScreenLoader from "../../../FullScreenLoader/FullScreenLoader";

const ProductPageWithHashData: React.FC<{ hash: string }> = ({ hash }) => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetProductsQuery();

    const hashData = data?.map?.get(hash);

    useEffect(() => {
        if(!isLoading && !hashData) navigate('/shop');
    },[hashData,isLoading]);

    if(isLoading) return <FullScreenLoader/>;
    if(hashData) return <ProductPageContent data={hashData}/>;
    return null;
}

export default ProductPageWithHashData;