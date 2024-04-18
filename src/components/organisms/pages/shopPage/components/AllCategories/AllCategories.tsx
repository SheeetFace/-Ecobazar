import { useMemo, memo } from 'react';

import CategoryItem from '../../../../../molecules/pages/shopPage/CategoryItem/CategoryItem';
import Divider from '../../../../../atoms/Divider/Divider';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import useFilter from '../../../../../../hooks/useFilter';

import { allCategoriesData } from '../../../../../../data/AllCategories';

import styles from '../AllCategories/AllCategories.module.scss';


interface AllCategoriesProps{
    isLoading:boolean

}

const AllCategories:React.FC<AllCategoriesProps> = ({isLoading=false}) => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._form)
    const [, changeNewFilter] =useFilter()

    const handleFilter =(value:string)=>{
        console.log(isLoading)
        changeNewFilter('categoryValue',value)
    }

    const renderCategories=useMemo(()=>{
        return allCategoriesData.map((item,i)=>{
            return(
                <CategoryItem   key={i}
                                value={item.value}
                                name={item.name}
                                fn={()=>handleFilter(item.value)}
                />
            )
        })
    },[])

    return (
        <section className={styles.AllCategories}>
            <div className={styles._header}>
                <h2>All Categories</h2>
                <h1 className={arrowClass} onClick={toggle}>
                    &#11165;
                </h1>
            </div>

            <form className={bodyClass}>
                {renderCategories}

                <Divider type='horizontal' className={styles._divider}/>
            </form>
           
        </section>
    )
}

export default memo(AllCategories);