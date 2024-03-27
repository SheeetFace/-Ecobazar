import { useEffect, useState } from 'react';
import styles from '../styles/styles.module.scss';

interface TimerGenericProps{
    delay:number,
    initialValue: number,
    label:string
}

const TimerGeneric:React.FC<TimerGenericProps> = ({delay,initialValue,label}) => {

    const [value, setValue] = useState<number>(initialValue)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setValue(prev=> ((prev === 0) ? initialValue : prev-1))
        },delay)

        return(()=> clearInterval(timer))
    },[])
    
    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>{value >=10 ? value : `0${value}`}</span>
            <span className={styles._label}>{label}</span>
        </div>
    )
}

export default TimerGeneric;