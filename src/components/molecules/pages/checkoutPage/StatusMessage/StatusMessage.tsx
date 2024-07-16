import { useAppSelector } from '../../../../../store/store';

import styles from '../StatusMessage/StatusMessage.module.scss';

import type { RootState } from '../../../../../store/store';

interface StatusMessageProps{
    message:string
    statusSelect:(state:RootState)=>boolean|string|null
}

const StatusMessage:React.FC<StatusMessageProps> = ({message,statusSelect}) => {

    const status = useAppSelector((state)=>statusSelect(state));

    const classs = !status ? styles._notConfirm : styles._confirm;

    return (
        <div className={`${styles.StatusMessage} ${classs}`}>
            <span>{message}</span>
            <span>{!status ? '✖' :'✔'}</span>
        </div>
    )
}

export default StatusMessage;