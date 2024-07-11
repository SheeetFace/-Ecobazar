import { useMemo } from 'react';

import { useProductsByIds } from '../../../../../hooks/products/useProductsByIds';

import PaidProductsTableItem from '../../../../molecules/pages/orderDetailDashboardPage/PaidProductsTableItem/PaidProductsTableItem';

import styles from '../PaidProductsTable/PaidProductsTable.module.scss';


import type { ProductsID } from '../../../../../types/db/order/submitOrderType';

interface PaidProductsTableProps{
    productIDs:ProductsID[]
}
type GetType = 'IDS'|string

const PaidProductsTable:React.FC<PaidProductsTableProps> = ({productIDs}) => {

    const { getData } = useMemo(()=>{
        const map = new Map(productIDs.map((product)=>[product.ID, product.quantity]));

        return{
          getData:(getType:GetType)=>{
            if(getType === 'IDS') return Array.from(map.keys());
            return map.get(getType);
          }
        }
    },[productIDs])

    const { filteredProducts } = useProductsByIds(getData('IDS') as string[])

    const renderPaidProductsTableItem =useMemo(()=>{
        return filteredProducts.map((item)=>{
            const quantity = getData(item.id)
            let subtotal:string;

            if(quantity && typeof quantity ==='number'){
                subtotal =(quantity * (+item.currentCost)).toString()
            }else{
                subtotal = 'N/A'
            }
            return(
                <PaidProductsTableItem  key={item.id}
                                        productData={item}
                                        quantity={quantity?.toString()||'0'}
                                        subtotal={subtotal}
                />
            )
        })
    },[filteredProducts]) 

    return (
        <table className={styles.PaidProductsTable}>
            <tr>
                <td>PRODUCT</td>
                <td>PRICE</td>
                <td>QUANTITY</td>
                <td>SUBTOTAL</td>
            </tr>
            {renderPaidProductsTableItem}
        </table>
    )
}

export default PaidProductsTable;
