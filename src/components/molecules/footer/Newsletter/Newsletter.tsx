import SubscribePanel from '../../SubscribePanel/SubscribePanel';
import SocialMediaIcons from '../../SocialMediaIcons/SocialMediaIcons';

import styles from '../Newsletter/Newsletter.module.scss';

const Newsletter:React.FC =()=>{

     return(
        <section className={styles.Newsletter}>
            <div className='center'>
                <div className={styles._conatiner}>

                    <div className={styles._SubcribeOurNewsletter}>
                        <span className={styles._title}>
                            Subcribe our Newsletter
                        </span>
                        <span className={styles._description}>
                            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
                        </span>
                    </div>

                    <SubscribePanel/>
                    
                    <SocialMediaIcons/>

                </div>
            </div>
        </section>
     )
}
export default Newsletter;