import { useState, useEffect, useMemo, useCallback } from "react";

import Slider from "react-slick";

import debounce from "lodash.debounce";

import { getSliderSettings } from "../utils/getSliderSettings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/slick.scss';

import type { SliderPropsTypes } from "../types/sliderPropsTypes";

interface UseSliderProps extends SliderPropsTypes {
 cards:React.ReactNode,
 isSliderShow:boolean,
 sliderShowBreakpoint?:number|null,
 cardsWithoutSliderStyles?:string
}


const useSlider:React.FC<UseSliderProps> = ({cards,isSliderShow,sliderShowBreakpoint=null,cardsWithoutSliderStyles, ...sliderProps}) => {

    const [isSlider, setIsSlider] = useState(()=>sliderShowBreakpoint ?
                                                  (window.innerWidth<= sliderShowBreakpoint)
                                                  : 
                                                  isSliderShow
                                            );

    useEffect(() => {
      const handleResize = () => {
        if(sliderShowBreakpoint){
          const width = window.innerWidth;

          if(width<= sliderShowBreakpoint) setIsSlider(true)
          if(isSlider && (width > sliderShowBreakpoint)) setIsSlider(false)
        }
      }

      const debouncedHandleResize = debounce(handleResize, 150);

      window.addEventListener('resize', debouncedHandleResize)

      return () => {  window.removeEventListener('resize', debouncedHandleResize) }
    },[isSlider,isSliderShow,sliderShowBreakpoint])

    const appendDots =useCallback((dots:JSX.Element)=>(<div> <ul className="DotsUl">{dots}</ul> </div>),[])
    const customPaging=useCallback(()=>(<div className="SlickDots"></div>),[])
    
    const settings = useMemo(()=>({
      ...getSliderSettings({...sliderProps,appendDots,customPaging}),
    }),[sliderProps])

    return (
        <div className="slider-container">
          {isSlider ? 

            <Slider {...settings}>
                {cards} 
            </Slider>

          : <div className={cardsWithoutSliderStyles}>{cards}</div>
          }
        </div>
    )
}

export default useSlider;
