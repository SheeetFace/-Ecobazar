import styles from '../QuantityIcon/QuantityIcon.module.scss';

interface QuantityIconProps{
    symbol:string
    disabled:boolean
}

const QuantityIcon:React.FC<QuantityIconProps> = ({symbol,disabled}) => {

    return (
        <div className={!disabled ? styles.QuantityIcon : styles.QuantityIconDisabled}>
            <span>{symbol}</span>
        </div>
    )
}

export default QuantityIcon;