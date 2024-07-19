import { NavLink } from 'react-router-dom';

import styles from '../PaidProductsTableItem/PaidProductsTableItem.module.scss';
import { ProductDataType } from '../../../../../types/product/productDataTypes';

interface PaidProductsTableItemProps{
    productData:ProductDataType
    quantity:string
    subtotal:string
}
const PaidProductsTableItem:React.FC<PaidProductsTableItemProps> = ({productData,quantity,subtotal}) => {

    const {name,currentCost} =  productData;

    return (
        <tr className={styles.PaidProductsTableItem}>
            <td>   
                <NavLink to={`/shop/${name}`}
                         state={{data: productData}} 
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