import useScrollToTop from '../../../hooks/useScrollToTop';

import OrderHistoryTable from '../../organisms/pages/orderHistoryDashboardPage/OrderHistoryTable/OrderHistoryTable';

import styles from '../OrderHistoryDashboardPage/OrderHistoryDashboardPage.module.scss';

const OrderHistoryDashboardPage:React.FC = () => {

    useScrollToTop(0,'smooth');

    return (
        <section className={styles.OrderHistoryDashboardPage}>
            <h1>Order History</h1>
            <OrderHistoryTable/>
            
        </section>
    )
}

export default OrderHistoryDashboardPage;