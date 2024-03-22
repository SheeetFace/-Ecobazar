import styles from '../LabelBadge/LabelBadge.module.scss';

interface LabelBadgeProps{
  className:string;
  label:string
}

const LabelBadge:React.FC<LabelBadgeProps> = ({className,label}) => {

  return (
    <div className={`${styles.LabelBadge} ${className}`}>
      <span>{label}</span>
    </div>
  )
}

export default LabelBadge;