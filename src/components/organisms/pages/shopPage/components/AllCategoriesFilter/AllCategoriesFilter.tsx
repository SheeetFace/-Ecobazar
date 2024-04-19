import { useMemo, memo, useEffect } from 'react';

import CategoryItem from '../../../../../molecules/pages/shopPage/CategoryItem/CategoryItem';
import Divider from '../../../../../atoms/Divider/Divider';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import useFilter from '../../../../../../hooks/useFilter';

import { allCategoriesData } from '../../../../../../data/AllCategories';

import styles from '../AllCategoriesFilter/AllCategoriesFilter.module.scss';


interface AllCategoriesFilterProps{
    isLoading:boolean

}

const AllCategoriesFilter:React.FC<AllCategoriesFilterProps> = ({isLoading=false}) => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._form)
    const [, changeNewFilter] =useFilter()

    const handleFilter =(value:string)=>{
        console.log(isLoading)
        // console.log(value)
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
        <section className={styles.AllCategoriesFilter}>
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

export default AllCategoriesFilter;