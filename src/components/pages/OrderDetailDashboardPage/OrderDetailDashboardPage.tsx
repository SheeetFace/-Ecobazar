import { useLocation,NavLink } from 'react-router-dom';
import useScrollToTop from '../../../hooks/useScrollToTop';

import Divider from '../../atoms/Divider/Divider';
import BillingAndShipping from '../../molecules/pages/orderDetailDashboardPage/BillingAndShipping/BillingAndShipping';
import SummaryPaid from '../../molecules/pages/orderDetailDashboardPage/SummaryPaid/SummaryPaid';
import ProgressTracker from '../../molecules/pages/orderDetailDashboardPage/ProgressTracker/ProgressTracker';
import PaidProductsTable from '../../organisms/pages/orderDetailDashboardPage/PaidProductsTable/PaidProductsTable';

import styles from '../OrderDetailDashboardPage/OrderDetailDashboardPage.module.scss';

import type { ILocation } from '../../../types/locationTypes';
import { ResponseOrderDataType } from '../../../types/db/order/responseOrderDataType';

type LocationResponseOrderDataType = {res:ResponseOrderDataType}

const OrderDetailDashboardPage:React.FC = () => {

    useScrollToTop(0,'smooth');
    const data:ILocation<LocationResponseOrderDataType> = useLocation();

    const {date,productIDs,id,status,totalPrice,shipping,paymentMethod} = data.state.res;

    return (
        <section className={styles.OrderDetailDashboardPage}>
            <div className={styles._headerContainer}>
                <div className={styles._info}>
                    <h1>Order Detail</h1>
                    <span>&#8226;</span>
                    <span>{date}</span>
                    <span>&#8226;</span>
                    <span>{productIDs.length} Products</span>
                </div>
                <NavLink to='/dashboard/orderHistory' className='_navLinkGreenPrimaryLetterSpacing'>Back To List</NavLink>
            </div>

            <Divider type='horizontal' className={styles._divider}/>
            
            <div className={styles._container}>
                <div className={styles._billingAndShipping}>
                    <BillingAndShipping shipping={shipping}/>
                </div>
                <div className={styles._summerPaid}>
                    <SummaryPaid id={id} totalPrice={totalPrice} paymentMethod={paymentMethod}/>
                </div>
            </div>
            <div className={styles._tracker}>
                <ProgressTracker status={status}/>
            </div>

            <div className={styles._table}>
                <PaidProductsTable productIDs={productIDs}/>
            </div>
        </section>
    )
}

export default OrderDetailDashboardPage;