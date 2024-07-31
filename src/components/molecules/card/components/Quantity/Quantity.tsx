import { useAppSelector, useAppDispatch } from '../../../../../store/store';
import { selectQuantityCountByID,increaseQuantity, decreaseQuantity } from '../../../../../store/slices/cartSlice';

import Button from '../../../../atoms/Button/Button';
import QuantityIcon from '../../../../atoms/icon/action/QuantityIcon/QuantityIcon';

import styles from '../Quantity/Quantity.module.scss';


interface QuantityProps{
    id:string
}

const Quantity:React.FC<QuantityProps> = ({id}) => {

    const dispatch = useAppDispatch();

    const count = useAppSelector((state)=> selectQuantityCountByID(state,id));

    const isCount = !!count;

    const decreaseCount =()=>{
        if(isCount && count > 1){
            dispatch(decreaseQuantity(id))
        }
    }

    const increaseCount =()=>{
        if(isCount && count < 50){
            dispatch(increaseQuantity(id))
        }
    }

    return (
        <div className={styles.Quantity}>
            <Button className='defaultButtonStyle'
                    onClick={decreaseCount}
                    disabled={!isCount}
                    icon={<QuantityIcon symbol='-' disabled={!isCount}/>}
                    type='button'
                    ariaLabel='Decrease count'
            />

            <span className={styles._count}>{isCount ? count: 1}</span>

            <Button className='defaultButtonStyle'
                    onClick={increaseCount}
                    disabled={!isCount}
                    icon={<QuantityIcon symbol='+' disabled={!isCount}/>}
                    type='button'
                    ariaLabel='Increase count'
            />
        </div>
    )
}

export default Quantity;