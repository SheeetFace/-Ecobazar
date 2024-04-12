import { NavLink } from 'react-router-dom';

import styles from '../OrderHistoryItemTable/OrderHistoryItemTable.module.scss';

interface OrderHistoryItemTableProps{
    id:string
    date:string
    price:string
    status:string
}

const OrderHistoryItemTable:React.FC<OrderHistoryItemTableProps> = ({id,date,price,status}) => {

    return (
        <tr className={styles.OrderHistoryItemTable}>
            <td>#{id}</td>
            <td>{date}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td className={styles._tdNavlink}>
                <NavLink    to='orderDetail'
                            state={{ orderID: id }} 
                            className='_navLinkGreenPrimary'>  
                    View Details
                </NavLink>
            </td>
        </tr>
    )
}

export default OrderHistoryItemTable;