import MapPinIcon from "../../../atoms/icons/social/MapPinIcon";

import  styles from '../StoreLocation/StoreLocation.module.scss'

const StoreLocation:React.FC = ()=>{

    return(
        <div className={styles.StoreLocation}>
            <MapPinIcon className={styles._map_pin_icon}/>
            <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
        </div>
    )
}
export default StoreLocation;