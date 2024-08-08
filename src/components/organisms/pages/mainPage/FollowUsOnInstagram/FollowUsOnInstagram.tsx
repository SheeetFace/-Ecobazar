import InstagramCard from '../../../../molecules/card/InstagramCard/InstagramCard';

import useSlider from '../../../../../hooks/useSlider';

import { instagramPostData } from '../../../../../data/instagramPost';

import styles from '../FollowUsOnInstagram/FollowUsOnInstagram.module.scss';

const FollowUsOnInstagram:React.FC = () => {

    const renderInstagramPost=()=>{
        return instagramPostData.map((item,i)=>{
            return(
                <InstagramCard src={item.src} alt={item.alt} key={i}/>
            )
        })
    }

    const Slider = useSlider({
        cards:renderInstagramPost(),
        styles:'',
        slidesToShow:5,
        dots:false,
    })

    return (
        <section className={styles.FollowUsOnInstagram}>

            <div className='center'>
                <span className={styles._title}>Follow us on Instagram</span>

                {/* <div className={styles._container}>
                    {renderInstagramPost()}
                </div> */}
                <div>{Slider}</div>
            </div>

        </section>
    )
}

export default FollowUsOnInstagram;