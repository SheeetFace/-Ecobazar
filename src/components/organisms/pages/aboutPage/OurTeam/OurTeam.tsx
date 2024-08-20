import useSlider from '../../../../../hooks/useSlider';

import OurTeamCard from '../../../../molecules/card/OurTeamCard/OurTeamCard';

import { ourTeamData } from '../../../../../data/ourTeam';

import styles from '../OurTeam/OurTeam.module.scss';

import { ourTeamSliderConfig } from '../../../../../config/slider/ourTeamSliderConfig';

const OurTeam:React.FC = () => {

    const renderOurTeamCards =()=>{
        return ourTeamData.map((item,i)=>{
            return(
                <OurTeamCard
                            name={item.name}
                            src={item.src}
                            personnel={item.personnel}
                            key={i}
                />
            )
        })
    }

    const slider = useSlider({
        cards:renderOurTeamCards(),
        styles:'',
        slidesToShow:4,
        dots:true,
        responsiveSetting:ourTeamSliderConfig,
        isSliderShow:true,
    })

    return (
        <section className={styles.OurTeam}>

            <div className='center'>
                <div className={styles._header}>
                    <span className={styles._title}>Our Awesome Team</span>
                    <span className={styles._description}>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</span>
                </div>

                <div >
                    {slider}
                </div>
            </div>
        </section>
    )
}

export default OurTeam;