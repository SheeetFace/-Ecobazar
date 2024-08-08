import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slick.scss';

interface useSliderProps{
    cards:React.ReactNode
    styles:string
    slidesToShow:number,
    dots?:boolean,
    arrows?:boolean,
    vertical?:boolean
    autoplay?:boolean
    pauseOnHover?:boolean
    swipe?:boolean
}

const useSlider:React.FC<useSliderProps> = ({
  cards,
  styles,
  slidesToShow,
  dots=false,
  arrows=false,
  vertical=false,
  autoplay=true,
  pauseOnHover= true,
  swipe=true,
  }) => {

    //!need individual breakpoint for each component for adaptation
    const settings = {
        className:styles,
        dots,
        infinite: true,
        speed: 1000,
        slidesToShow,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        pauseOnHover,
        autoplay,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows,
        vertical,
        swipe,
        appendDots: (dots:JSX.Element) => (
          <div>
            <ul className="DotsUl"> {dots} </ul>
          </div>
        ),
        customPaging:()=>(
          <div className="SlickDots"></div>
        ),
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
