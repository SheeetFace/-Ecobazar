import { NavLink } from 'react-router-dom'

import { formatDate } from '../../../../../utils/formatDate';

import Divider from '../../../../atoms/Divider/Divider';
import BillingAndShipping from '../../../../molecules/pages/orderDetailDashboardPage/BillingAndShipping/BillingAndShipping';
import SummaryPaid from '../../../../molecules/pages/orderDetailDashboardPage/SummaryPaid/SummaryPaid';
import ProgressTracker from '../../../../molecules/pages/orderDetailDashboardPage/ProgressTracker/ProgressTracker';
import PaidProductsTable from '../PaidProductsTable/PaidProductsTable';

import styles from '../OrderDetailDashboardPageContent/OrderDetailDashboardPageContent.module.scss';

import type { ResponseOrderDataType } from '../../../../../types/db/order/responseOrderDataType';


const OrderDetailDashboardPageContent:React.FC<{data:ResponseOrderDataType}> = ({data}) => {

    const {date,productIDs,id,status,totalPrice,shipping,paymentMethod} = data;

    return (
        <section className={styles.OrderDetailDashboardPageContent}>
            <div className={styles._headerContainer}>
                <div className={styles._info}>
                    <h1>Order Detail</h1>
                    <span>&#8226;</span>
                    <span>{formatDate(date, 'full')}</span>
                    <span>&#8226;</span>
                    <span>{productIDs.length} Products</span>
                </div>
                <NavLink to='/dashboard/order-history' className='_navLinkGreenPrimaryLetterSpacing'>To The List</NavLink>
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

export default OrderDetailDashboardPageContent;