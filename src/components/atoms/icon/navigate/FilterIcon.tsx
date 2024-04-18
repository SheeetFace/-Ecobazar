interface FilterIconProps{
   className:string
}

const FilterIcon:React.FC<FilterIconProps> = ({className}) => {

    return (
        <svg className={className} width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M18 5H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path className={className} d="M13 14H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle className={className} cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5"/>
            <circle className={className} cx="17" cy="14" r="4" stroke="white" strokeWidth="1.5"/>
        </svg>
    )
}

export default FilterIcon;