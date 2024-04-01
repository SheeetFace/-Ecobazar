import StoreLocation from "../StoreLocation/StoreLocation";
import Button from "../../../atoms/Button/Button";

import {NavLink} from "react-router-dom";

import styles from "../HeaderTop/HeaderTop.module.scss"

const HeaderTop:React.FC =()=>{

    return(
        <section className={styles.HeaderTop}>
            <div className="center">
                <div className={styles._container}>
                    <StoreLocation/>

                    <NavLink to="/login">
                        <Button className="SingInSingOut"
                                text="Sing in / Sing out"
                                type='button'
                        />
                    </NavLink>
                </div>
            </div>

        </section>
    )
}
export default HeaderTop;