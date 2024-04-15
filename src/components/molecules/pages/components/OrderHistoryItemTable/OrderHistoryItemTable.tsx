import { NavLink } from 'react-router-dom';

import styles from '../OrderHistoryItemTable/OrderHistoryItemTable.module.scss';

interface OrderHistoryItemTableProps{
    id:string
    date:string
    price:string
    productCount:string
    status:string
}

const OrderHistoryItemTable:React.FC<OrderHistoryItemTableProps> = ({id,date,price,productCount,status}) => {

    return (
        <tr className={styles.OrderHistoryItemTable}>
            <td>#{id}</td>
            <td>{date}</td>
            <td>
                <span className={styles._price}>{price}</span> 
                ({productCount} Products)
            </td>
            <td>{status}</td>
            <td className={styles._tdNavlink}>
                <NavLink    to='/dashboard/orderDetail'
                            state={{id,date,price,productCount,status}} 
                            className='_navLinkGreenPrimary'>  
                    View Details
                </NavLink>
            </td>
        </tr>
    )
}

export default OrderHistoryItemTable;