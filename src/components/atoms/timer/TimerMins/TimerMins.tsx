import { useEffect, useState } from 'react';

import styles from '../styles/styles.module.scss';

const TimerMins:React.FC = () => {

    const [min, setMin] = useState<number>(59)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setMin(prev=> ((prev === 0) ? 59 : prev-1))
        },60000)

        return(()=> clearInterval(timer))
    },[])
    
    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>{min >=10 ? min : `0${min}`}</span>
            <span className={styles._label}>MINS</span>
        </div>
    )
}

export default TimerMins;