import { formatDate } from '../../../../utils/formatDate';

import styles from '../DateLabel/DateLabel.module.scss';

interface DateLabelProps{
    date:string
}

const DateLabel:React.FC<DateLabelProps> = ({date}) => {

    const dateFormatted = formatDate(date,'short')
    const [day, month] = dateFormatted.split(' ')

    return (
        <div className={styles.DateLabel}>
            <span className={styles._day}>{day}</span>
            <span className={styles._month}>{month}</span>
        </div>
    )
}

export default DateLabel;