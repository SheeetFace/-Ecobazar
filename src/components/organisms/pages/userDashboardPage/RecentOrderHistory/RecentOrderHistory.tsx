import { NavLink } from 'react-router-dom';

import { useQueryDataByUserID } from '../../../../../hooks/useQueryDataByUserID';

import { selectOrdersStatus, selectOrderHistory, updateStatus, updateAllOrderHistory } from '../../../../../store/slices/orderHistorySlice';

import { firebaseGetUserOrdersService } from '../../../../../services/db/order/firebaseGetUserOrdersService';

import HeaderOrderHistoryTable from '../../../../molecules/pages/components/HeaderOrderHistoryTable/HeaderOrderHistoryTable';
import OrderHistoryItemTable from '../../../../molecules/pages/components/OrderHistoryItemTable/OrderHistoryItemTable';


import styles from '../RecentOrderHistory/RecentOrderHistory.module.scss';

import type { ResponseOrderDataType } from '../../../../../types/db/order/responseOrderDataType';

const RecentOrderHistory:React.FC = () => {

    const { queryData, renderLoaderOrError} = useQueryDataByUserID<ResponseOrderDataType[]>(
        selectOrdersStatus,
        selectOrderHistory,
        firebaseGetUserOrdersService,
        updateStatus,
        updateAllOrderHistory
    )

    const renderOrderHistoryItemTable =()=>{
        
        const data =queryData.slice(0,10)

        return data.map((item,i)=>{
            return(
                <OrderHistoryItemTable  key={i}
                                        id={item.id}
                                        date={item.date}
                                        price={item.totalPrice}
                                        productCount={(item.productIDs.length).toString()||'N/A'}
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
            {renderLoaderOrError()}
            <table>
                <HeaderOrderHistoryTable/>
                {renderOrderHistoryItemTable()}
            </table>
        </section>
    )
}

export default RecentOrderHistory;