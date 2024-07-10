import Divider from '../../../../../atoms/Divider/Divider';

import styles from '../AddressDetails/AddressDetails.module.scss';

import type { UserDataType } from '../../../../../../types/userTypes';

interface AddressDetailsProps{
    title:'BILLING'|'SHIPPING'
    data:UserDataType['billingAddress']|undefined
}

const AddressDetails:React.FC<AddressDetailsProps> = ({title,data}) => {

    const classs = title==='SHIPPING' ? styles._border:'';

    return(
        <div className={`${styles.AddressDetails} ${classs}`}>
            <div className={styles._title}>{title} ADDRESS</div>
            <Divider type='horizontal' className={styles._divider}/>

            <div className={styles._container}>
                <div className={styles._nameAndAddress}>
                    <span className={styles._name}>
                        {data?.firstName} {data?.lastName}
                    </span>
                    <span className={styles._address}>
                       {data?.address}
                    </span>
                </div>
                
                <div className={styles._wrapper}>
                    <label>EMAIL</label>
                    <span>{data?.email}</span>
                </div>

                <div className={styles._wrapper}>
                    <label>PHONE</label>
                    <span>{data?.phone}</span>
                </div>
            </div>
        </div>
    )
}

export default AddressDetails;