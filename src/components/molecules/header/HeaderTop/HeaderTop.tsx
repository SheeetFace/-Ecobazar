import {NavLink} from "react-router-dom";

import { useAuthState } from "../../../../hooks/useAuthState";

import UserHeader from "../UserHeader/UserHeader";

import StoreLocation from "../StoreLocation/StoreLocation";
import Button from "../../../atoms/Button/Button";

import styles from "../HeaderTop/HeaderTop.module.scss"

const HeaderTop:React.FC =()=>{

    const {user, loading} = useAuthState()


    const renderContent = ()=>{

        if(loading){
            return <div className={`${styles._loading} _skeleton`}/>
        
        }else if(!loading && !user){
            return(
                <NavLink to="/login">
                    <Button className="ButtonFilledOval fillWhite colorTextGreenPrimary"  text="Sing in" type='button'/>
                </NavLink>
            )
        }else if(!loading && user){
            return(
                <NavLink to="/dashboard">
                    <UserHeader photoURL={user.photoURL} displayName={user.displayName}/>
                </NavLink>
            )
        }else{
            return <span>Sorry, try later </span>
        }
    }

    return(
        <section className={styles.HeaderTop}>
            <div className="center">
                <div className={styles._container}>
                    <StoreLocation/>

                    {renderContent()}
                </div>
            </div>

        </section>
    )
}
export default HeaderTop;