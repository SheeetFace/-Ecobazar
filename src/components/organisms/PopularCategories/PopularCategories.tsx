import TitleWithViewAll from '../../molecules/TitleWithViewAll/TitleWithViewAll';
import PopularCategoriesCard from '../../molecules/card/PopularCategoriesCard/PopularCategoriesCard';

import { categories } from '../../../data/categories';

import styles from '../PopularCategories/PopularCategories.module.scss';

interface PopularCategoriesCard{
    img:string,
    title:string
    path:string
}

const PopularCategories:React.FC = () => {

    const renderPopularCategories = ()=>{
        return categories.map((item:PopularCategoriesCard,i)=>{
            return(
                <PopularCategoriesCard key={i}
                                        img={item.img}
                                        title={item.title}
                                        path={item.path}
                />
            )
        })
    }

  return (
    <section className={styles.PopularCategories}>
        <div className='center'>
            <TitleWithViewAll title='Popular Categories' path='/'/>

            <div className={styles._center}>
                <div className={styles._cards}>
                    {renderPopularCategories()}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularCategories;