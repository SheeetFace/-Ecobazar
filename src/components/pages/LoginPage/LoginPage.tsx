import Login from '../../organisms/auth/Login/Login';

import styles from '../LoginPage/LoginPage.module.scss';

const LoginPage:React.FC = () => {

    return (
        <section className={styles.LoginPage}>
            <Login/>
        </section>
    )
}

export default LoginPage;