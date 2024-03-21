import styles from '../Divider/Divider.module.scss'

type DividerType = 'horizontal' | 'vertical';

interface DividerProps {
  type: DividerType;
  className:string;
}

const Divider:React.FC<DividerProps> =({type, className})=>{

    const dividerClass = type === 'horizontal' ? styles.horizontal : styles.vertical;

    return <div className={`${styles.Divider} ${dividerClass} ${className}`}></div>;

}
export default Divider;