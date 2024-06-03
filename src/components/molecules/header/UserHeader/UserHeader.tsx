import Logo from '../../Logo/Logo';

import styles from '../UserHeader/UserHeader.module.scss';

interface UserHeaderProps{
    displayName:string,
    photoURL:string
}

const UserHeader:React.FC<UserHeaderProps> = ({displayName,photoURL}) => {

    return (
        <div className={styles.UserHeader}>
            {photoURL ? <img alt='user name' src={photoURL}/> : <Logo className=''/>}

            <span>{displayName}</span>
        </div>
    )
}

export default UserHeader;