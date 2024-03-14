
import styles from '../SingInOut/SingInOut.module.scss'

const SingInOut:React.FC = ()=>{

    return(
        <button className='resetButton'>
            <span className={styles.text}>Sing in / Sing out</span>
        </button>
    )
}
export default SingInOut;