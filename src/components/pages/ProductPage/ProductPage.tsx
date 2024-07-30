import useConditionalNavigation from '../../../hooks/useConditionalNavigation';
import useScrollToTop from '../../../hooks/useScrollToTop';

import ProductPageContent from '../../organisms/pages/productPage/ProductPageContent/ProductPageContent';
import ProductPageWithHashData from '../../organisms/pages/productPage/ProductPageWithHashData/ProductPageWithHashData';


const ProductPage: React.FC = () => {

    useScrollToTop(0, 'instant');

    const {data,hash} = useConditionalNavigation('/shop');

    if(data) return <ProductPageContent data={data}/>;
    else if(!data && hash) return <ProductPageWithHashData hash={hash}/>;
    else null
}

export default ProductPage;