import { useAppSelector } from '../../../../../../store/store';

import { selectQuantityCountByID } from '../../../../../../store/slices/cartSlice';

import styles from '../SubTotal/SubTotal.module.scss';

interface SubTotalProps{
    price:number
    id:string
}

const SubTotal:React.FC<SubTotalProps> = ({price,id}) => {

    const count = useAppSelector((state)=>selectQuantityCountByID(state,id));

    const subtotal = count && (price * count).toFixed(2);

    return (
        <div className={styles.SubTotal}>
            <span>${subtotal}</span>
        </div>
    )
}

export default SubTotal;