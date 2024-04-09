import { useState} from 'react';

import QuantityIcon from '../../../../../atoms/icon/action/QuantityIcon/QuantityIcon';

import styles from '../Quantity/Quantity.module.scss';

const Quantity:React.FC = () => {

    const [count, setCount] = useState<number>(1);

    const DecreaseCount =()=>{
        if(count < 50){
            setCount((prev) => prev +1)
        }
    }

    const IncreaseCount =()=>{
        if(count > 1){
            setCount((prev) => prev -1)
        }
    }


    return (
        <div className={styles.Quantity}>
            <div onClick={IncreaseCount}>
                <QuantityIcon symbol='-'/>
            </div>

            <span className={styles._count}>{count}</span>

            <div onClick={DecreaseCount}>
                <QuantityIcon symbol='+'/>
            </div>
        </div>
    )
}

export default Quantity;