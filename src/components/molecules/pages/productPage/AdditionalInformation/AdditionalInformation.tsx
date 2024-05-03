import { memo } from 'react';

import styles from '../AdditionalInformation/AdditionalInformation.module.scss';

interface AdditionalInformationData{
    weight:string
    color:string
    type:string
    category:string
    stockStatus:string
    tag:string[]
}

interface AdditionalInformationProps{
    data:AdditionalInformationData
}

const AdditionalInformation:React.FC<AdditionalInformationProps> = ({data}) => {

    const renderRow =()=>{
        return Object.entries(data).map(([key,value],i)=>{

            const upperKey = key && key.length > 0 ? (key[0].toUpperCase()+key.slice(1)) : key;
            const newValue = value && value.length > 0 && Array.isArray(value) ? value.join(' • ') :value;

            return(
                <div className={styles._container} key={i}>
                    <span>{upperKey}:</span>
                    <span className={styles._value}>{newValue}</span>
                </div> 
            )
        })
    }

    return (
        <section className={styles.AdditionalInformation}>
            {renderRow()}
        </section>
    )
}

export default memo(AdditionalInformation);