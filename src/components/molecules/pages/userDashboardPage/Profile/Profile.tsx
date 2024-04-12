import { NavLink } from 'react-router-dom';

import styles from '../Profile/Profile.module.scss';

const Profile:React.FC = () => {

    return (
        <section className={styles.Profile}>

            <div className={styles._profileImg}>
                <img alt='profile image' src='https://cdn.discordapp.com/attachments/872343092500504628/1227957231207845938/image.png?ex=662a4b4a&is=6617d64a&hm=7192a45990350c4b175becc97d5efd6174b56583f05fd7075688aafcfec4b44d&'/>
            </div>

            <span className={styles._name}>Dianne Russell</span>
            <span className={styles._customer}>Customer</span>

            <div className={styles._navLinkMargin}>
                <NavLink to='settings' className='_navLinkGreenPrimaryLetterSpacing _sizeLarge'>
                    <span>Edit Profile</span>
                </NavLink>
            </div>

        </section>
    )
}

export default Profile;