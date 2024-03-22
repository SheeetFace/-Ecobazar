import styles from '../FeatureItem/FeatureItem.module.scss';

interface FeatureItemProps{
    icon:JSX.Element
    title:string
    description:string
    iconClassName: string;
    titleClassName: string;
    descriptionClassName: string;
}

const FeatureItem:React.FC<FeatureItemProps> = ({icon, title, description,iconClassName,titleClassName,descriptionClassName}) => {

  return (
    <div className={styles.FeatureItem}>

        <div className={`${styles._icon} ${iconClassName}`}>
            {icon}
        </div>

        <div className={styles._container}>
            <span className={`${styles._title} ${titleClassName}`}>{title}</span>
            <span className={`${styles._description} ${descriptionClassName}`}>{description}</span>
        </div>
    </div>
  )
}

export default FeatureItem;