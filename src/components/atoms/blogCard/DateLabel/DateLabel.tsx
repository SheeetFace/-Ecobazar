import styles from '../DateLabel/DateLabel.module.scss';

interface DateLabelProps{
    date:string
}

const DateLabel:React.FC<DateLabelProps> = ({date}) => {

    const [day, month] = date.split(' ')

    return (
        <div className={styles.DateLabel}>
            <span className={styles._day}>{day}</span>
            <span className={styles._month}>{month}</span>
        </div>
    )
}

export default DateLabel;