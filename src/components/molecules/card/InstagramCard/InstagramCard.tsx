import InstagramIcon from '../../../atoms/icon/contact/InstagramIcon';

import styles from '../InstagramCard/InstagramCard.module.scss';


interface InstagramCardProps{
    src:string
    alt:string
}

const InstagramCard:React.FC<InstagramCardProps> = ({src,alt}) => {

    return (
        <a href='https://www.instagram.com/' target='_blank'>
            <div className={styles.InstagramCard}>
                <div className={styles._container}>
                    <img loading="lazy" src={src} alt={alt}/>
                    <InstagramIcon className={styles._instagramIcon}/>
                </div>
            </div>
        </a>
    )
}

export default InstagramCard;