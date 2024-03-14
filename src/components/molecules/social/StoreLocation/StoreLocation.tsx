import MapPinIcon from "../../../atoms/icon/social/MapPinIcon";

import  styles from '../StoreLocation/StoreLocation.module.scss'

const StoreLocation:React.FC = ()=>{

    return(
        <div className={styles.StoreLocation}>
            <MapPinIcon className={styles._MapPinIcon}/>
            <span className={styles.span}>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
        </div>
    )
}
export default StoreLocation;