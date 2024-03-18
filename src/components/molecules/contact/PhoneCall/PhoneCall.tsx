import PhoneIcon from '../../../atoms/icon/contact/PhoneIcon'

import styles from '../PhoneCall/PhoneCall.module.scss'

interface PhoneCallProps{
    isIcon?:boolean
    className:string
}

const PhoneCall:React.FC<PhoneCallProps>=({isIcon,className})=>{

    return(
        <div className={styles.PhoneCall}>
            {isIcon ?<PhoneIcon className=''/> :null}
            <span className={className}>(219) 555-0114</span>
        </div>
    )
}
export default PhoneCall;