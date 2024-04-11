import DashboardNavigationItem from '../../../../molecules/pages/dahsboardPage/DashboardNavigationItem/DashboardNavigationItem';
import Divider from '../../../../atoms/Divider/Divider';

import { dashboardNavigationData } from '../../../../../data/dashboardNavigation';

import styles from '../DashboardNavigation/DashboardNavigation.module.scss';

const DashboardNavigation:React.FC = () => {

    const renderDashboardNavigationItem = ()=>{

        return dashboardNavigationData.map((item,i)=>{
            return(
                <DashboardNavigationItem name={item.name}
                                         to={item.to}
                                         icon={item.icon}
                                         key={i}/>
            )
        })
    }

    return (
        <nav className={styles.DashboardNavigation}>
            <h1>Navigation</h1>
            <Divider type='horizontal' className={styles._divider}/>

            <ul>
            {renderDashboardNavigationItem()}
            </ul>
        </nav>      
    )
}

export default DashboardNavigation;