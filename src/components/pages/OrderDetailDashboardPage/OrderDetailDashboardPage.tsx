import { useLocation,NavLink } from 'react-router-dom';

import Divider from '../../atoms/Divider/Divider';
import BillingAndShipping from '../../molecules/pages/orderDetailDashboardPage/BillingAndShipping/BillingAndShipping';
import SummaryPaid from '../../molecules/pages/orderDetailDashboardPage/SummaryPaid/SummaryPaid';
import ProgressTracker from '../../molecules/pages/orderDetailDashboardPage/ProgressTracker/ProgressTracker';

import styles from '../OrderDetailDashboardPage/OrderDetailDashboardPage.module.scss';

import type { ILocation } from '../../../types/locationTypes';

interface State{
    date: string;
    id: string;
    price: string;
    productCount:string;
    status: string;
}


const OrderDetailDashboardPage:React.FC = () => {

    const data:ILocation<State> = useLocation()

    return (
        <section className={styles.OrderDetailDashboardPage}>
            <div className={styles._headerContainer}>
                <div className={styles._info}>
                    <h1>OrderDetailDashboardPage</h1>
                    <span>&#8226;</span>
                    <span>{data.state.date}</span>
                    <span>&#8226;</span>
                    <span>{data.state.productCount} Products</span>
                </div>
                <NavLink to='/dashboard/orderHistory' className='_navLinkGreenPrimaryLetterSpacing'>Back To List</NavLink>
            </div>

            <Divider type='horizontal' className={styles._divider}/>
            
            <div className={styles._container}>
                <div className={styles._billingAndShipping}>
                    <BillingAndShipping/>
                </div>
                <div className={styles._summerPaid}>
                    <SummaryPaid id={data.state.id}/>
                </div>
            </div>
            <div className={styles._tracker}>
                <ProgressTracker status={data.state.status}/>
            </div>
        </section>
    )
}

export default OrderDetailDashboardPage;