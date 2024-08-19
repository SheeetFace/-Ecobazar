interface ResponsiveSettingItem{
    breakpoint: number,
    settings: {
        slidesToShow: number,
        slidesToScroll: number,
        initialSlide?: number,
        infinite?: boolean,
        dots?: boolean,
    }   
}

export interface SliderPropsTypes{
    styles:string
    slidesToShow:number
    dots?:boolean
    arrows?:boolean
    vertical?:boolean
    autoplay?:boolean
    pauseOnHover?:boolean
    swipe?:boolean
    responsiveSetting:ResponsiveSettingItem[]
}

export interface SliderSettingsTypes extends SliderPropsTypes{
    appendDots: (dots: JSX.Element) => JSX.Element,
    customPaging: () => JSX.Element
}