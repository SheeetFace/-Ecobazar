import { useMemo,useContext, memo} from 'react';

import CategoryItem from '../../../../../molecules/pages/shopPage/CategoryItem/CategoryItem';
import Divider from '../../../../../atoms/Divider/Divider';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import { FilterContext } from '../../../../../../context/FilterContext';

import { allCategoriesData } from '../../../../../../data/filter/allCategories';

import styles from '../AllCategoriesFilter/AllCategoriesFilter.module.scss';

const AllCategoriesFilter:React.FC = () => {

    const {filter, changeFilter } = useContext(FilterContext);
    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._form)

    const handleFilter =(value:string)=>{

        const category = filter.categoryValue;

        const index = category.findIndex((el)=> el===value)

        if(index !== -1) category.splice(index,1)
        else category.push(value)

        changeFilter('categoryValue',category)
    }

    const renderCategories=useMemo(()=>{
        return allCategoriesData.map((item,i)=>{
            return(
                <CategoryItem   key={i}
                                value={item.value}
                                name={item.name}
                                fn={()=>handleFilter(item.value)}
                                isChecked={filter.categoryValue.includes(item.value)}
                />
            )
        })
    },[filter])
    
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
    
export default memo(AllCategoriesFilter);