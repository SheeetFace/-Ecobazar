import styles from '../FeatureCard/FeatureCard.module.scss';

interface FeatureCardProps{
    icon:JSX.Element
    title:string
    description:string
    iconClassName: string;
    titleClassName: string;
    descriptionClassName: string;
}

const FeatureCard:React.FC<FeatureCardProps> = ({icon, title, description,iconClassName,titleClassName,descriptionClassName}) => {

  return (
    <div className={styles.FeatureCard}>

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

export default FeatureCard;