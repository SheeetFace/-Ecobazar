import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../../../context/AuthContext';

import DisplayField from '../../../DisplayField/DisplayField';

import styles from '../BillingAddress/BillingAddress.module.scss';

const BillingAddress:React.FC = () => {

    const {user} =useContext(AuthContext)

    return (
        <section className={styles.BillingAddress}>
            <span className={styles._title}>Billing Address</span>

            <DisplayField
                value={user?.billingAddress.firstName || user?.billingAddress.lastName ? `${user?.billingAddress.firstName} ${user?.billingAddress.lastName}` : undefined}
                defaultText="Name not specified"
                className={styles._name}
            />

            <DisplayField
                value={user?.billingAddress.address}
                defaultText="Address not specified"
                className={styles._address}
            />

            <DisplayField
                value={user?.billingAddress.email}
                defaultText="Email not specified"
                className={styles._address}
            />

            <DisplayField
                value={user?.billingAddress.phone}
                defaultText="Phone not specified"
                className={styles._address}
            />
    
            <div className={styles._navLinkMargin}>
                <NavLink to='settings' className='_navLinkGreenPrimaryLetterSpacing _sizeLarge'>
                    <span>Edit Address</span>
                </NavLink>
            </div>
        </section>
    )
}

export default BillingAddress;