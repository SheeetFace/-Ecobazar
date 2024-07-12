import useScrollToTop from '../../../hooks/useScrollToTop';

import AccountSettings from '../../organisms/pages/settingsDashboardPage/AccountSettings/AccountSettings';
import BillingAddressSettings from '../../organisms/pages/settingsDashboardPage/BillingAddressSettings/BillingAddressSettings';
import ChangePasswordSettings from '../../organisms/pages/settingsDashboardPage/ChangePasswordSettings/ChangePasswordSettings';

import styles from '../SettingsDashboardPage/SettingsDashboardPage.module.scss';

const SettingsDashboardPage:React.FC = () => {

    useScrollToTop(0,'smooth');

    return (
        <section className={styles.SettingsDashboardPage}>

            <div className={styles._account}>
                    <AccountSettings/>
            </div>

            <div className={styles._address}>
                    <BillingAddressSettings/>
            </div>

            <div className={styles._password}>
                    <ChangePasswordSettings/>
            </div>

        </section>
    )
}

export default SettingsDashboardPage;
