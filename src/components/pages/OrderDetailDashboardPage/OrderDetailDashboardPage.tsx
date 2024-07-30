import useConditionalNavigation from '../../../hooks/useConditionalNavigation';
import useScrollToTop from '../../../hooks/useScrollToTop';

import OrderDetailDashboardPageContent from '../../organisms/pages/orderDetailDashboardPage/OrderDetailDashboardPageContent/OrderDetailDashboardPageContent';
import OrderDetailDashboardPageWithHashData from '../../organisms/pages/orderDetailDashboardPage/OrderDetailDashboardPageWithHashData/OrderDetailDashboardPageWithHashData';

const OrderDetailDashboardPage:React.FC = () => {

    useScrollToTop(0,'smooth');
    
    const {data,hash} = useConditionalNavigation('/dashboard')

    if(data) return <OrderDetailDashboardPageContent data={data}/>
    else if(!data && hash) return <OrderDetailDashboardPageWithHashData hash={hash}/>
    else null
}

export default OrderDetailDashboardPage;