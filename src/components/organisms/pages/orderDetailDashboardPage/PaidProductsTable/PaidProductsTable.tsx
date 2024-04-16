import PaidProductsTableItem from '../../../../molecules/pages/orderDetailDashboardPage/PaidProductsTableItem/PaidProductsTableItem';

import { paidProductsData } from '../../../../../data/temp/paidProductsData';

import styles from '../PaidProductsTable/PaidProductsTable.module.scss';

const PaidProductsTable:React.FC = () => {

    const renderPaidProductsTableItem =()=>{
        return paidProductsData.map((item,i)=>{
            return(
                <PaidProductsTableItem  key={i}
                                        id={item.id}
                                        name={item.name}
                                        category={item.category}
                                        currentCost={item.currentCost}
                                        quantity={item.quantity}
                                        subtotal={item.subtotal}
                />
            )
        })
    }

    return (
        <table className={styles.PaidProductsTable}>
            <tr>
                <td>PRODUCT</td>
                <td>PRICE</td>
                <td>QUANTITY</td>
                <td>SUBTOTAL</td>
            </tr>
            {renderPaidProductsTableItem()}
        </table>
    )
}

export default PaidProductsTable;
