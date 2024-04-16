import { NavLink } from 'react-router-dom';

import styles from '../PaidProductsTableItem/PaidProductsTableItem.module.scss';

interface PaidProductsTableItemProps{
    id:string
    name:string
    category:string
    currentCost:string
    quantity:string
    subtotal:string
}
const PaidProductsTableItem:React.FC<PaidProductsTableItemProps> = ({id,name,category,currentCost,quantity,subtotal}) => {

    //! mb i have to full path push (/vegetable/123 or /meat/123)

    return (
        <tr className={styles.PaidProductsTableItem}>
            <td>   
                <NavLink    to={`/shop/${category}/${id}`}
                            className='_navLinkGreenPrimary'>  
                    {name}
                </NavLink>
            </td>
            <td>${currentCost}</td>
            <td>x{quantity}</td>
            <td className={styles._subtotal}>${subtotal}</td>
        </tr>
    )
}

export default PaidProductsTableItem;