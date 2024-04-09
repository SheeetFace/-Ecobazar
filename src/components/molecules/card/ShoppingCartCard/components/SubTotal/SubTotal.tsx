import styles from '../SubTotal/SubTotal.module.scss';

interface SubTotalProps{
    price:number
}

const SubTotal:React.FC<SubTotalProps> = ({price}) => {

    //react query get .toFixed(2)
    return (
        <div className={styles.SubTotal}>
            <span>${price}</span>
        </div>
    )
}

export default SubTotal;