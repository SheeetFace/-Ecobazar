import PinterestIcon from '../../atoms/icon/contact/PinterestIcon';
import InstagramIcon from '../../atoms/icon/contact/InstagramIcon';
import XIcon from '../../atoms/icon/contact/XIcon';
import FacebookIcon from '../../atoms/icon/contact/FacebookIcon';

import styles from '../SocialMediaIcons/SocialMediaIcons.module.scss'

const SocialMediaIcons =()=>{

    return(
        <div className={styles.SocialMediaIcons}>

            <a className={styles._icon}
               target='_blank'
               href='https://www.pinterest.com/'>
                    <PinterestIcon className=''/>
            </a>

            <a className={styles._icon}
               target='_blank'
               href='https://www.instagram.com/'>
                    <InstagramIcon className=''/>
            </a>

            <a className={styles._icon}
               target='_blank'
               href='https://twitter.com/'>
                    <XIcon className=''/>
            </a>

            <a className={styles._icon}
               target='_blank'
               href='https://www.facebook.com/'>
                    <FacebookIcon className=''/>
            </a> 

        </div>
    )
}
export default SocialMediaIcons;