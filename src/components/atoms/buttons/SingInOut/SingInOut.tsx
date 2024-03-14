
import styles from '../SingInOut/SingInOut.module.scss'

const SingInOut:React.FC = ()=>{

    return(
        <button className='resetButton'>
            <span className={styles.span}>Sing In / Sing Out</span>
        </button>
    )
}
export default SingInOut;