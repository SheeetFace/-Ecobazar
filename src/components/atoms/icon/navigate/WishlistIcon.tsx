
interface WishlistIconProps{
    className:string
}

const WishlistIcon:React.FC<WishlistIconProps> = ({className})=>{

    return(
        <svg className={className} width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M14.9995 24.5722C-11.6667 9.83334 6.99999 -6.16666 14.9995 3.95075C23 -6.16666 41.6666 9.83334 14.9995 24.5722Z" stroke="#1A1A1A" strokeWidth="1.5"/>
        </svg>
    )
}
export default WishlistIcon;