import AccountSettings from '../../organisms/pages/settingsDashboardPage/AccountSettings/AccountSettings';

import styles from '../SettingsDashboardPage/SettingsDashboardPage.module.scss';

const SettingsDashboardPage:React.FC = () => {

    return (
        <section className={styles.SettingsDashboardPage}>

            <div className={styles._account}>
                    <AccountSettings/>

            </div>

        </section>
    )
}

export default SettingsDashboardPage;
