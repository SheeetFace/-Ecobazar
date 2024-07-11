import { memo } from 'react';

import useTotalPrice from '../../../../../hooks/useTotalPrice';

import Divider from '../../../../atoms/Divider/Divider';

import styles from '../PaymentSummary/PaymentSummary.module.scss';

interface PaymentSummaryProps{
    type?:'detail'|'checkout'
    totalPriceProp?:string
}

const PaymentSummary:React.FC<PaymentSummaryProps> = ({type='checkout',totalPriceProp}) => {

    const totalPriceRedux = useTotalPrice()

    let totalPrice;

    if(type==='detail') totalPrice =totalPriceProp
    else totalPrice = totalPriceRedux;

    return (
        <div className={styles.PaymentSummary}>
                <div className={styles._subTotal}>
                    <span>Subtotal:</span>
                    <span className={styles._cost}>${totalPrice}</span>
                </div>
                <Divider type='horizontal' className={styles._divider}/>
                <div className={styles._shipping}>
                    <span>Shipping:</span>
                    <span className={styles._cost}>Free</span>
                </div>
                <Divider type='horizontal' className={styles._divider}/>
                <div className={styles._total}>
                    <span>Total:</span>
                    <span className={styles._totalCost}>${totalPrice}</span>
                </div>
        </div>
    )
}

export default memo(PaymentSummary);