import styles from '../PopularCategoriesCard/PopularCategoriesCard.module.scss';

interface PopularCategoriesCardProps{
    img:string,
    title:string
}

const PopularCategoriesCard:React.FC<PopularCategoriesCardProps> = ({img,title}) => {

  return (
    <div className={styles.PopularCategoriesCard}>

        <img src={img} alt={title}/>

        <span>{title}</span>

    </div>
  )
}

export default PopularCategoriesCard;