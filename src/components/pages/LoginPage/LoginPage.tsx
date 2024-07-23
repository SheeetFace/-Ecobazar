import useScrollToTop from '../../../hooks/useScrollToTop';

import Login from '../../organisms/pages/loginAndRegistrationPage/Login/Login';

import styles from '../LoginPage/LoginPage.module.scss';

const LoginPage:React.FC = () => {

    useScrollToTop(0,'smooth',200);

    return (
        <section className={styles.LoginPage}>
            <Login/> 
        </section>
    )
}

export default LoginPage;