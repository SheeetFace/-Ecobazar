import Divider from '../../../../atoms/Divider/Divider';

import styles from '../BillingAndShipping/BillingAndShipping.module.scss';

const BillingAndShipping:React.FC = () => {

    return (
        <div className={styles.BillingAndShipping}>

            <div className={styles._billing}>
                <div className={styles._title}>BILLING ADDRESS</div>
                <Divider type='horizontal' className={styles._divider}/>

                <div className={styles._container}>
                    <div className={styles._nameAndAddress}>
                        <span className={styles._name}>
                            Dainne Russell
                        </span>
                        <span className={styles._address}>
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </span>
                    </div>
                    
                    <div className={styles._wrapper}>
                        <label>EMAIL</label>
                        <span>dainne.ressell@gmail.com</span>
                    </div>

                    <div className={styles._wrapper}>
                        <label>PHONE</label>
                        <span>(671) 555-0110</span>
                    </div>
                </div>

            </div>

            <div className={styles._shipping}>
                <div className={styles._title}>SHIPPING ADDRESS</div>
                <Divider type='horizontal' className={styles._divider}/>

                <div className={styles._container}>
                    <div className={styles._nameAndAddress}>
                        <span className={styles._name}>
                            Dainne Russell
                        </span>
                        <span className={styles._address}>
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </span>
                    </div>
                    
                    <div className={styles._wrapper}>
                        <label>EMAIL</label>
                        <span>dainne.ressell@gmail.com</span>
                    </div>

                    <div className={styles._wrapper}>
                        <label>PHONE</label>
                        <span>(671) 555-0110</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BillingAndShipping;