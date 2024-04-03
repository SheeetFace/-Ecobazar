import Registration from '../../organisms/pages/loginAndRegistrationPage/Registration/Registration';

import styles from '../RegistrationPage/RegistrationPage.module.scss';

const RegistrationPage:React.FC = () => {

    return (
        <div className={styles.RegistrationPage}>
            <Registration/>
        </div>
    )
}

export default RegistrationPage;