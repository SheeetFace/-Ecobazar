import { NavLink } from 'react-router-dom';

import { formatDate } from '../../../../../utils/formatDate';

import styles from '../OrderHistoryItemTable/OrderHistoryItemTable.module.scss';

import type { ResponseOrderDataType } from '../../../../../types/db/order/responseOrderDataType';


const OrderHistoryItemTable:React.FC<ResponseOrderDataType> = (item) => {
    return (
        <tr className={styles.OrderHistoryItemTable}>
            <td>#{`${(item.id).slice(0,6)}...`}</td>
            <td>{formatDate(item.date, 'normal')}</td>
            <td>
                <span className={styles._price}>${item.totalPrice}</span> 
                ({(item.productIDs.length).toString()||'N/A'} Products)
            </td>
            <td>{item.status}</td>
            <td className={styles._tdNavlink}>
                <NavLink    to={`/dashboard/order-detail#${item.id}`}
                            state={{data:item}} 
                            className='_navLinkGreenPrimary'>  
                    View Details
                </NavLink>
            </td>
        </tr>
    )
}

export default OrderHistoryItemTable;