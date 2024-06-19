import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/store';

import DisplayField from '../../../DisplayField/DisplayField';

import styles from '../Profile/Profile.module.scss';

const Profile:React.FC = () => {

    const user = useAppSelector((state)=> state.auth.user)

    return (
        <section className={styles.Profile}>

            <div className={styles._profileImg}>
                <img alt='profile image' src={user?.accountSettings.photoURL || ''}/> 
            </div>

            <DisplayField
                value={user?.accountSettings.firstName || user?.accountSettings.lastName ? `${user?.accountSettings.firstName} ${user?.accountSettings.lastName}` : undefined}
                defaultText="Name not specified"
                className={styles._name}
            />

            <span className={styles._customer}>{user?.userType || 'Customer'}</span>

            <div className={styles._navLinkMargin}>
                <NavLink to='settings' className='_navLinkGreenPrimaryLetterSpacing _sizeLarge'>
                    <span>Edit Profile</span>
                </NavLink>
            </div>

        </section>
    )
}

export default Profile;