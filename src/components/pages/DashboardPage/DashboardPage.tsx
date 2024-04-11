import DashboardNavigation from '../../organisms/pages/dashboardPage/DashboardNavigation/DashboardNavigation';

import styles from '../DashboardPage/DashboardPage.module.scss';

const DashboardPage:React.FC = () => {

    return (
        <section className={styles.DashboardPage}>
            <div className='center'>
                <div className={styles._navigation}>
                    <DashboardNavigation/>
                </div>
                
            </div>
        </section>
    )
}

export default DashboardPage;