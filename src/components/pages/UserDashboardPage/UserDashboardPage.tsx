import Profile from '../../molecules/pages/userDashboardPage/Profile/Profile';
import BillingAddress from '../../molecules/pages/userDashboardPage/BillingAddress/BillingAddress';
import RecentOrderHistory from '../../organisms/pages/userDashboardPage/RecentOrderHistory/RecentOrderHistory';

import styles from '../UserDashboardPage/UserDashboardPage.module.scss';

const UserDashboardPage:React.FC = () => {

    return (
        <div className={styles.UserDashboardPage}>
            <div className={styles._container}>
                <div className={styles._profile}>
                    <Profile/>
                </div>

                <div className={styles._billingAddress}>
                    <BillingAddress/>
                </div>
            </div>

            <RecentOrderHistory/>

        </div>
    )
}

export default UserDashboardPage;