import { Outlet } from 'react-router-dom';

import DashboardNavigation from '../../organisms/pages/dashboardPage/DashboardNavigation/DashboardNavigation';

import styles from '../DashboardPage/DashboardPage.module.scss';

const DashboardPage:React.FC = () => {

    return (
        <section className={styles.DashboardPage}>
            <div className='center'>
                <div className={styles._container}>
                    <div className={styles._navigation}>
                        <DashboardNavigation/>
                    </div>

                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default DashboardPage;