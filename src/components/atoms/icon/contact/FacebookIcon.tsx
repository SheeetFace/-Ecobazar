interface FacebookIconProps{
    className:string
}

const FacebookIcon:React.FC<FacebookIconProps> =({className})=>{
    return(
        <svg  width="18" height="18" viewBox="0 0 18 18" fill="#4D4D4D" xmlns="http://www.w3.org/2000/svg">
            <g  clipPath="url(#clip0_74_16589)">
                <path className={className} d="M11.9976 2.98875H13.6409V0.12675C13.3574 0.08775 12.3824 0 11.2469 0C8.87764 0 7.25464 1.49025 7.25464 4.22925V6.75H4.64014V9.9495H7.25464V18H10.4601V9.95025H12.9689L13.3671 6.75075H10.4594V4.5465C10.4601 3.62175 10.7091 2.98875 11.9976 2.98875Z" fill="#4D4D4D"/>
            </g>
            <defs>
            <clipPath  id="clip0_74_16589">
                <rect  width="18" height="18" fill="#4D4D4D"/>
            </clipPath>
            </defs>
        </svg>
    )
}
export default FacebookIcon;