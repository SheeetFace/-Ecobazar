import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem";

import { headerNavigation } from "../../../config/headerNavigationConfig";

import styles from '../NavLinks/NavLinks.module.scss'

interface NavigationLink{
    name:string,
    path:string,
}

const NavLinks =()=>{

    const renderNavLinks = ():JSX.Element[] =>{
        return headerNavigation.map((item:NavigationLink,i)=>{
            return(
                <NavLinkItem name={item.name}
                             path={item.path}
                             key={i}/>  
            )
        })
    }

    return(
        <div className={styles.NavLinks}>{renderNavLinks()}</div>
    )
}
export default NavLinks;