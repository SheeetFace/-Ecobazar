import styles from '../Divider/Divider.module.scss'

type DividerType = 'horizontal' | 'vertical';

interface DividerProps {
  type: DividerType;
}

const Divider:React.FC<DividerProps> =({type})=>{

    const dividerClass = type === 'horizontal' ? styles.horizontal : styles.vertical;

    return <div className={`${styles.Divider} ${dividerClass}`}></div>;

}
export default Divider;