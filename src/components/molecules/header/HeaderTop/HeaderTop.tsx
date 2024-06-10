import {NavLink} from "react-router-dom";

import { useAuthState } from "../../../../hooks/useAuthState";

import UserHeader from "../UserHeader/UserHeader";

import StoreLocation from "../StoreLocation/StoreLocation";
import Button from "../../../atoms/Button/Button";
import AlertMessage from "../../AlertMessage/AlertMessage";

import styles from "../HeaderTop/HeaderTop.module.scss"

const HeaderTop:React.FC =()=>{

    const {user, loading, error} = useAuthState()

    const renderButton = ()=>{
        return(
            <NavLink to="/login">
                <Button className="ButtonFilledOval fillWhite colorTextGreenPrimary buttonMaxHeight buttonWidthMaxContent"  text="Sing in" type='button'/>
            </NavLink>
        )
    }

    const renderContent = ()=>{

        if(loading){
            return <div className={`${styles._loading} _skeleton`}/>
    
        }else if(!loading && !user && !error){ 
            return renderButton()

        }else if(!loading && user){
            return(
                <NavLink to="/dashboard">
                    <UserHeader photoURL={user.photoURL} displayName={user.displayName}/>
                </NavLink>
            )
        }else if(error){
            return(
                <div className={styles._error}>
                    <AlertMessage type="error" title="Error" message={error || ''}/>
                    {renderButton()}
                </div>
            )
        }else{
           return (<div style={{width:'maxContent'}}><AlertMessage type="error" title="Error" message='Sorry, auth not available now' isCanClose={false}/></div> )
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