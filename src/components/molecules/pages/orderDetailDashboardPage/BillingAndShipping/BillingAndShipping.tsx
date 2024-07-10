import { useMemo } from 'react';

import { useAppSelector } from '../../../../../store/store';

import AddressDetails from './AddressDetails/AddressDetails';


import styles from '../BillingAndShipping/BillingAndShipping.module.scss';

// import type { UserDataSettingsOrAddressType } from '../../../../../types/userTypes';
import { UserDataType } from '../../../../../types/userTypes';


interface BillingAndShippingProps {
    shipping: Partial<UserDataType['billingAddress']>[];
  }

const BillingAndShipping:React.FC<BillingAndShippingProps> = ({shipping}) => {

    const userBilling = useAppSelector((state)=>state.auth.user?.billingAddress)

    const combinedAddress = useMemo(() => {

        if(shipping.length ===0) return userBilling
        if(!userBilling) return undefined

        const shippingData = shipping.reduce((acc,item)=>({ ...acc, ...item }),{});

        return{...userBilling,...shippingData}

    },[userBilling, shipping]);

    return (
        <div className={styles.BillingAndShipping}>
            <AddressDetails title='BILLING' data={userBilling}/>
            <AddressDetails title='SHIPPING' data={combinedAddress}/>
        </div>
    )
}

export default BillingAndShipping;