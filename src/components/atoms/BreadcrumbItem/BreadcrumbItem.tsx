import { NavLink } from 'react-router-dom'

import styles from '../BreadcrumbItem/Breadcrumb.module.scss'

interface BreadcrumbItemProps{
    name:string
    pathBack:string
    isLast:boolean
}
const BreadcrumbItem:React.FC<BreadcrumbItemProps> =({name,pathBack,isLast})=>{

    return( 
        <>
            {!isLast ?
                <NavLink className='_navLink' to={pathBack}>
                    <span className={styles.BreadcrumbItem}>
                        {name}
                    </span>
                </NavLink>
            : 
                <div className={`${styles.BreadcrumbItem} ${styles._lastItem}`}>
                    {name}
                </div>
            }
        </>     
    )
}
export default BreadcrumbItem;

