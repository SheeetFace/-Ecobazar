import Login from '../../organisms/pages/loginAndRegistrationPage/Login/Login';

import styles from '../LoginPage/LoginPage.module.scss';

const LoginPage:React.FC = () => {

    return (
        <section className={styles.LoginPage}>
            <Login/>
        </section>
    )
}

export default LoginPage;