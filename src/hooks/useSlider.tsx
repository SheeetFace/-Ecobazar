// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface useSliderProps{
    cards:React.ReactNode
    styles:string
    slidesToShow:number,
    dots?:boolean,
    arrows?:boolean,
}

const useSlider:React.FC<useSliderProps> = ({cards,styles,slidesToShow,dots=false,arrows=false}) => {

    //!need individual breakpoint for each component for adaptation
    const settings = {
        className:styles,
        dots,
        infinite: true,
        speed: 1000,
        slidesToShow,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows,
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

    return (
        <Slider {...settings}>
            {cards} 
        </Slider>
    )
}

export default useSlider;