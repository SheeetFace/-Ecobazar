import { NavLink } from 'react-router-dom'
import styles from '../NavLinkItem/NavLinkItem.module.scss'

interface NavLinkItemProps{
    name:string
    path:string
}
const NavLinkItem:React.FC<NavLinkItemProps> = ({name,path})=>{
    
    return(
        <NavLink className={styles.navLink} to={path}>
            <span className={styles.NavLinkItem}>
                {name}
            </span>
        </NavLink>
    )
}
export default NavLinkItem;