import Button from '../../atoms/Button/Button';

import styles from '../LogOutDashboardPage/LogOutDashboardPage.module.scss';

const LogOutDashboardPage:React.FC = () => {

    return (
        <section className={styles.LogOutDashboardPage}>
            <span>🥦</span>
            <h2>Oh, you really want to log out of ECOBAZAR?</h2>

            <div className={styles._logout}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='Log Out'/>
            </div>
        </section>
    )
}

export default LogOutDashboardPage;