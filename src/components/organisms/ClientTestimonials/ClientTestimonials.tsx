import useSlider from '../../../hooks/useSlider';

import TestimonialCard from '../../molecules/card/TestimonialCard/TestimonialCard';

import { clientTestimonialsData } from '../../../data/temp/clientTestimonialsData';

import styles from '../ClientTestimonials/ClientTestimonials.module.scss';

interface ClientTestimonialsData {
    id:string
    name:string,
    avatar:string
    testimonial:string
    rating:string
}

import { clientTestimonialsSliderConfig } from '../../../config/slider/clientTestimonialsSliderConfig';

const ClientTestimonials:React.FC = () => {

    const renderTestimonials = ()=>{
        return clientTestimonialsData.map((item:ClientTestimonialsData,i)=>{
            return(
                    <div className={styles._cardItem} key={i}>
                        <TestimonialCard    
                                            id={item.id}
                                            name={item.name}
                                            avatar={item.avatar}
                                            testimonial={item.testimonial}
                                            rating={item.rating}
                        />
                    </div>
            )
        })
    }

    const slider = useSlider({
        cards:renderTestimonials(),
        styles:styles._settingSlider,
        slidesToShow:3,
        dots:true,
        responsiveSetting:clientTestimonialsSliderConfig,
        isSliderShow:true,
        cardsWithoutSliderStyles:styles._cards
    })

    return (
        <section className={styles.ClientTestimonials}>
            <div className='center'>
                <div className={styles._titleContainer}>
                    <span className={styles._title}>Client Testimonials</span>
                </div>

                {slider}

            </div>
        </section>
    )
}

export default ClientTestimonials;