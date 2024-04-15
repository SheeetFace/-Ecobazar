import Divider from '../../../../atoms/Divider/Divider';
import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';

import styles from '../SummaryPaid/SummaryPaid.module.scss';

interface SummaryPaidProps{
    id:string
}

const SummaryPaid:React.FC<SummaryPaidProps> = ({id}) => {

    return (
        <section className={styles.SummaryPaid}>

            <div className={styles._header}>
                <div className={styles._container}>
                    <span>ORDER ID</span>
                    <span className={styles._idOrMethod}>#{id}</span>
                </div>

                <Divider type='vertical' className={styles._divider}/>

                <div className={styles._container}>
                    <span>PAYMENT METHOD</span>
                    <span className={styles._idOrMethod}>PayPal</span>
                </div>
            </div>

            <Divider type='horizontal' className={styles._divider}/>

            <PaymentSummary/>
        </section>
    )
}

export default SummaryPaid;