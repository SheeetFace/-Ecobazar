import { NavLink } from 'react-router-dom';

import HeaderOrderHistoryTable from '../../../../molecules/pages/components/HeaderOrderHistoryTable/HeaderOrderHistoryTable';
import OrderHistoryItemTable from '../../../../molecules/pages/components/OrderHistoryItemTable/OrderHistoryItemTable';

import { orderHistoryData } from '../../../../../data/temp/orderHistoryData';

import styles from '../RecentOrderHistory/RecentOrderHistory.module.scss';

const RecentOrderHistory:React.FC = () => {

    const renderOrderHistoryItemTable =()=>{
        
        const data = orderHistoryData.length <=10 ?orderHistoryData : orderHistoryData.slice(0,10)

        return data.map((item,i)=>{
            return(
                <OrderHistoryItemTable  key={i}
                                        id={item.id}
                                        date={item.date}
                                        price={item.price}
                                        status={item.status}
                />
            )
        })
    }

    return (
        <section className={styles.RecentOrderHistory}>
            <div className={styles._header}>
                <h1>Recent Order History</h1>

                <NavLink to='orderHistory' className='_navLinkGreenPrimaryLetterSpacing'>
                    View All
                </NavLink>
            </div>

            <table>
                <HeaderOrderHistoryTable/>
                {renderOrderHistoryItemTable()}
            </table>
        </section>
    )
}

export default RecentOrderHistory;