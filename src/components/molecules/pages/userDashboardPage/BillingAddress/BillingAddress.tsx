import { NavLink } from 'react-router-dom';

import styles from '../BillingAddress/BillingAddress.module.scss';

const BillingAddress:React.FC = () => {

    return (
        <section className={styles.BillingAddress}>
            <span className={styles._title}>Billing Address</span>

            <span className={styles._name}>Dainne Russell</span>
            <span className={styles._address}>4140 Parker Rd. Allentown, New Mexico 31134</span>

            <span>dainne.ressell@gmail.com</span>
            <span>(671) 555-0110</span>

            <div className={styles._navLinkMargin}>
                <NavLink to='settings' className='_navLinkGreenPrimaryLetterSpacing _sizeLarge'>
                    <span>Edit Address</span>
                </NavLink>
            </div>
        </section>
    )
}

export default BillingAddress;