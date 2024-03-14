
import PlantIcon from "../../atoms/icon/PlantIcon.tsx"

import styles from '../Logo/Logo.module.scss'

interface LogoProps{
    className:string
}

const Logo:React.FC<LogoProps> = ({className})=>{

    return(
        <div className={styles.Logo}>
            <PlantIcon/>
            <span className={className}>Ecobazar</span>
        </div>
    )
}
export default Logo;