import styles from '../Devider/Devider.module.scss'

type DeviderType = 'horizontal' | 'vertical';

interface DeviderProps {
  type: DeviderType;
}

const Devider:React.FC<DeviderProps> =({type})=>{

    const deviderClass = type === 'horizontal' ? styles.horizontal : styles.vertical;

    return <div className={`${styles.Devider} ${deviderClass}`}></div>;

}
export default Devider;