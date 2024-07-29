import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import useScrollToTop from '../../../hooks/useScrollToTop';

import ProductPageContent from '../../organisms/pages/productPage/ProductPageContent/ProductPageContent';
import ProductPageWithHashData from '../../organisms/pages/productPage/ProductPageWithHashData/ProductPageWithHashData';


const ProductPage: React.FC = () => {
    useScrollToTop(0, 'instant');

    const navigate = useNavigate()

    const locationState = useLocation();
    const data = locationState.state?.data;
    const hash = locationState.hash;

    useEffect(()=>{
        if(!data && !hash) return navigate('/shop')
    },[data])

    if(data) return <ProductPageContent data={data}/>;
    else if(!data && hash) return <ProductPageWithHashData hash={hash.slice(1)}/>;
    else null
}

export default ProductPage;