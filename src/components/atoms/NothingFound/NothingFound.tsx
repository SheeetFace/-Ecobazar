import styles from '../NothingFound/NothingFound.module.scss';

interface NotingFoundProps{
    message?:string
}

const NotingFound:React.FC<NotingFoundProps> = ({message='Oops, nothing found.'}) => {

    return (
        <div className={styles.NothingFound}>
            <span>⛅</span>
            <h3>{message}</h3>
            <span>🌱🌱🌱</span>
        </div>
    )
}

export default NotingFound;