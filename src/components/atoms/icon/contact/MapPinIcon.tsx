
interface MapPinIconProps{
    className:string
}

const MapPinIcon:React.FC<MapPinIconProps> =({className})=>{

    return(
        <svg className={className} width="35" height="45" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M3.15625 43.2188H31.8438" stroke="#2C742F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path className={className} d="M17.5 24.0938C19.1908 24.0938 20.8123 23.4221 22.0078 22.2266C23.2033 21.031 23.875 19.4095 23.875 17.7188C23.875 16.028 23.2033 14.4065 22.0078 13.2109C20.8123 12.0154 19.1908 11.3438 17.5 11.3438C15.8092 11.3438 14.1877 12.0154 12.9922 13.2109C11.7966 14.4065 11.125 16.028 11.125 17.7188C11.125 19.4095 11.7966 21.031 12.9922 22.2266C14.1877 23.4221 15.8092 24.0938 17.5 24.0938V24.0938Z" stroke="#2C742F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path className={className} d="M33.4375 17.7188C33.4375 32.0625 17.5 43.2188 17.5 43.2188C17.5 43.2188 1.5625 32.0625 1.5625 17.7188C1.5625 13.4919 3.24162 9.4381 6.23049 6.44924C9.21935 3.46037 13.2731 1.78125 17.5 1.78125C21.7269 1.78125 25.7807 3.46037 28.7695 6.44924C31.7584 9.4381 33.4375 13.4919 33.4375 17.7188V17.7188Z" stroke="#2C742F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default MapPinIcon;