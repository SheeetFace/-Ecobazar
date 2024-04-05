import SocialMediaIcons from '../../SocialMediaIcons/SocialMediaIcons';

import styles from '../OurTeamCard/OurTeamCard.module.scss';

interface OurTeamCardProps{
    name:string
    src:string
    personnel:string
}

const OurTeamCard:React.FC<OurTeamCardProps> = ({name,src,personnel}) => {
    
    //! <SocialMediaIcons className={styles._icons}/> too long while adapt scaling
    //! need to change adaptObject in useSlider

    return (
        <div className={styles.OurTeamCard}>

            <div className={styles._img}>
                <img src={src} alt={personnel}/>
                <div className={styles._socialMediaIcons}>
                    <SocialMediaIcons className={styles._icons}/>
                </div>
            </div>

            <div className={styles._container}>
                <span className={styles._name}>{name}</span>
                <span className={styles._personnel}>{personnel}</span>
 
            </div>

        </div>
    )
}

export default OurTeamCard;