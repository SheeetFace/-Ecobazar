import { NavLink } from 'react-router-dom'

import styles from '../BreadcrumbItem/Breadcrumb.module.scss'

interface BreadcrumbItemProps{
    name:string
    pathBack:string
    isLast:boolean
}
const BreadcrumbItem:React.FC<BreadcrumbItemProps> =({name,pathBack,isLast})=>{

    return( 
            // <NavLink className='_navLink' to={!isLast ? pathBack :''}>
            //     <span className={styles.BreadcrumbItem}>
            //         {name}
            //     </span>
            // </NavLink>
            <>
            {!isLast ? (
    <NavLink className='_navLink' to={pathBack}>
            <span className={styles.BreadcrumbItem}>
        {name}
    </span>
    </NavLink>
) : (
    <span className={styles.BreadcrumbItem}>
        {name}
    </span>
)}

            </>
            
    )
}
export default BreadcrumbItem;

