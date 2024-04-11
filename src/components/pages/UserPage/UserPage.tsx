import Profile from '../../molecules/pages/userPage/Profile/Profile';
import BillingAddress from '../../molecules/pages/userPage/BillingAddress/BillingAddress';

import styles from '../UserPage/UserPage.module.scss';

const UserPage:React.FC = () => {

    return (
        <div className={styles.UserPage}>
            <div className={styles._container}>
                <div className={styles._profile}>
                    <Profile/>
                </div>

                <div className={styles._billingAddress}>
                    <BillingAddress/>
                </div>
            </div>

        </div>
    )
}

export default UserPage;