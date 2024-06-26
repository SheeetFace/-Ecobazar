import { NavLink } from 'react-router-dom';

import TitleWithViewAll from '../../../../molecules/pages/mainPage/TitleWithViewAll/TitleWithViewAll';
import PopularCategoriesCard from '../../../../molecules/card/PopularCategoriesCard/PopularCategoriesCard';

import { categories } from '../../../../../data/categories';

import styles from '../PopularCategories/PopularCategories.module.scss';

// interface PopularCategoriesCard{
//     img:string,
//     title:string
//     categoryFilter:string
// }

const PopularCategories:React.FC = () => {

    const renderPopularCategories = ()=>{
        return categories.map((item,i)=>{
            return(
                <NavLink to='/shop' state={{categoryFilter:item.categoryFilter}}>
                    <PopularCategoriesCard  key={i}
                                            img={item.img}
                                            title={item.title}
                    />
                </NavLink>
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