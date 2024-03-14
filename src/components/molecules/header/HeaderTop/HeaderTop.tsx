import StoreLocation from "../../social/StoreLocation/StoreLocation";
import SingInOut from "../../../atoms/button/SingInOut/SingInOut";

import styles from "../HeaderTop/HeaderTop.module.scss"

const HeaderTop:React.FC =()=>{

    return(
        <section className={styles.HeaderTop}>
            <div className="center">
                <div className={styles._container}>
                    <StoreLocation/>
                    <SingInOut/>
                </div>
            </div>

        </section>
    )
}
export default HeaderTop;