import styles from '../DashboardNavigationItem/DashboardNavigationItem.module.scss';

interface DashboardNavigationItemProps{
    name:string
    to:string
    icon:React.FC<{className: string}>
}

const DashboardNavigationItem:React.FC<DashboardNavigationItemProps> = ({name,to,icon:Icon}) => {

    return (
        <li className={styles.DashboardNavigationItem}>
            <Icon className={styles._icon}/>
            <span>{name}</span>
        </li>
    )
}

export default DashboardNavigationItem;