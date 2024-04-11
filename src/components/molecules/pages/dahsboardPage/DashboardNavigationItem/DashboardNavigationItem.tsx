import { NavLink } from 'react-router-dom';

import styles from '../DashboardNavigationItem/DashboardNavigationItem.module.scss';

interface DashboardNavigationItemProps{
    name:string
    to:string
    icon:React.FC<{className: string}>
}

const DashboardNavigationItem:React.FC<DashboardNavigationItemProps> = ({name,to,icon:Icon}) => {

    return (
        <NavLink className={styles._navLink} to={to}>
            <li className={styles.DashboardNavigationItem}>
                <Icon className={styles._icon}/>
                <span>{name}</span>
            </li>
        </NavLink>
    )
}

export default DashboardNavigationItem;