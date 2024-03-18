import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem";

import { navigation } from "../../../data/navigation";

import styles from '../NavLinks/NavLinks.module.scss'

interface NavigationLink{
    name:string,
    path:string,
}

const NavLinks =()=>{

    const renderNavLinks = ():JSX.Element[] =>{
        return navigation.map((item:NavigationLink,i)=>{
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