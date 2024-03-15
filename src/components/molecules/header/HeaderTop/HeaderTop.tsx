import StoreLocation from "../../social/StoreLocation/StoreLocation";
import Button from "../../../atoms/Button/Button";

import styles from "../HeaderTop/HeaderTop.module.scss"

const HeaderTop:React.FC =()=>{

    return(
        <section className={styles.HeaderTop}>
            <div className="center">
                <div className={styles._container}>
                    <StoreLocation/>
                    <Button className="SingInSingOut"
                            text="Sing in / Sing out"
                    />
                </div>
            </div>

        </section>
    )
}
export default HeaderTop;