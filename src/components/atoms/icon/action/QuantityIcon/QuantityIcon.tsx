import styles from '../QuantityIcon/QuantityIcon.module.scss';

interface QuantityIconProps{
    symbol:string
}

const QuantityIcon:React.FC<QuantityIconProps> = ({symbol}) => {

    return (
        <div className={styles.QuantityIcon}>
            <span>{symbol}</span>
        </div>
    )
}

export default QuantityIcon;