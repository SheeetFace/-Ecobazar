import Divider from '../../../../atoms/Divider/Divider';
import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';

import styles from '../SummaryPaid/SummaryPaid.module.scss';

interface SummaryPaidProps{
    id:string
    totalPrice:string
    paymentMethod:string
}

const SummaryPaid:React.FC<SummaryPaidProps> = ({id,totalPrice,paymentMethod}) => {

    return (
        <section className={styles.SummaryPaid}>

            <div className={styles._header}>
                <div className={styles._container}>
                    <span>ORDER ID</span>
                    <span className={styles._idOrMethod}>#{id}</span>
                </div>

                <Divider type='horizontal' className={styles._divider}/>

                <div className={styles._container}>
                    <span>PAYMENT METHOD</span>
                    <span className={styles._idOrMethod}>{paymentMethod}</span>
                </div>
            </div>

            <Divider type='horizontal' className={styles._divider}/>

            <PaymentSummary type='detail' totalPriceProp={totalPrice} />
        </section>
    )
}

export default SummaryPaid;