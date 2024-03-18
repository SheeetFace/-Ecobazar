import styles from '../NavLinkItem/NavLinkItem.module.scss'

interface NavLinkItemProps{
    name:string
    path:string
}
const NavLinkItem:React.FC<NavLinkItemProps> = ({name,path})=>{
    
    return(
        <span className={styles.NavLinkItem}>
            {name}
        </span>
    )
}
export default NavLinkItem;