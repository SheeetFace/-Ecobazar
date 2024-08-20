import InstagramCard from '../../../../molecules/card/InstagramCard/InstagramCard';

import useSlider from '../../../../../hooks/useSlider';

import { instagramPostData } from '../../../../../data/instagramPost';

import styles from '../FollowUsOnInstagram/FollowUsOnInstagram.module.scss';

import { followInstagramSliderConfig } from '../../../../../config/slider/followInstagramSliderConfig';

const FollowUsOnInstagram:React.FC = () => {

    const renderInstagramPost=()=>{
        return instagramPostData.map((item,i)=>{
            return(
                <InstagramCard src={item.src} alt={item.alt} key={i}/>
            )
        })
    }

    const slider = useSlider({
        cards:renderInstagramPost(),
        styles:'',
        slidesToShow:5,
        dots:false,
        responsiveSetting:followInstagramSliderConfig,
        isSliderShow:true,
        cardsWithoutSliderStyles:styles._cards
    })

    return (
        <section className={styles.FollowUsOnInstagram}>

            <div className='center'>
                <div className={styles._title}>
                    <span>Follow us on Instagram</span>
                </div>
                <div>{slider}</div>
            </div>

        </section>
    )
}

export default FollowUsOnInstagram;