import { useState, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const ClientTestimonials:React.FC = () => {
    const settings = {
        className:styles._settingSlider,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows:false,
        // centerMode:true,
        // dotsClass:styles._dotsClass,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
        
      };

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

    return (
        <section className={styles.ClientTestimonials}>
            <div className='center'>
                <div>
                    <span className={styles._title}>Client Testimonials</span>
                </div>
      <Slider {...settings}>

                     {renderTestimonials()} 
      </Slider>
            </div>
        </section>
    )
}

export default ClientTestimonials;