import styles from '../PopularCategoriesCard/PopularCategoriesCard.module.scss';

interface PopularCategoriesCardProps{
    img:string,
    title:string
}

const PopularCategoriesCard:React.FC<PopularCategoriesCardProps> = ({img,title}) => {

  return (
    <div className={styles.PopularCategoriesCard}>
      <figure>

        <img src={img} 
             alt={title}
             loading="lazy"
             width='156'
             height='106'
            />

        <figcaption>
          <span>{title}</span>
        </figcaption>

      </figure>
    </div>
  )
}

export default PopularCategoriesCard;
