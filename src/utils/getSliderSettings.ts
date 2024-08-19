import type { SliderSettingsTypes } from "../types/sliderPropsTypes";

export const getSliderSettings = ({
    slidesToShow,
    styles,
    dots = false,
    arrows = false,
    vertical = false,
    autoplay = true,
    pauseOnHover = true,
    swipe = true,
    appendDots,
    customPaging,
    responsiveSetting

    }:SliderSettingsTypes)=>{

    return {
        className:styles,
        dots,
        infinite: true,
        speed: 1000,
        slidesToShow,
        slidesToScroll: 1,
        pauseOnHover,
        autoplay,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows,
        vertical,
        swipe,
        appendDots,
        customPaging,
        responsive: responsiveSetting
    }
}