
import styles from '../UserHeader/UserHeader.module.scss';

interface UserHeaderProps{
    displayName:string,
    photoURL:string
}

const UserHeader:React.FC<UserHeaderProps> = ({displayName,photoURL}) => {

    return (
        <div className={styles.UserHeader}>
            {photoURL ? <img alt='user name' src={photoURL}/> : <span style={{fontSize:'1.5rem'}}>🥦</span>}
            <span>{displayName}</span>
        </div>
    )
}

export default UserHeader;