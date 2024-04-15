import { useLocation,NavLink } from 'react-router-dom';

import Divider from '../../atoms/Divider/Divider';
import BillingAndShipping from '../../molecules/pages/orderDetailDashboardPage/BillingAndShipping/BillingAndShipping';

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
            <BillingAndShipping/>
        </section>
    )
}

export default OrderDetailDashboardPage;