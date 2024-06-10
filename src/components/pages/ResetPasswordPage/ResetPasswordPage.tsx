import ResetPassword from '../../organisms/pages/loginAndRegistrationPage/ResetPassword/ResetPassword';

import styles from '../ResetPasswordPage/ResetPasswordPage.module.scss';

const ResetPasswordPage:React.FC = () => {

    return (
        <div className={styles.ResetPasswordPage}>
            <ResetPassword/>
        </div>
    )
}

export default ResetPasswordPage;