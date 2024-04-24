import styles from '../NothingFound/NothingFound.module.scss';

const NotingFound:React.FC = () => {

    return (
        <div className={styles.NothingFound}>
                <h3>Oops, nothing found.</h3>
                <span>🥦</span>
        </div>
    )
}

export default NotingFound;