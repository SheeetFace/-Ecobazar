import { useMemo, memo} from 'react';

import { useAppDispatch } from '../../../../../store/store';

import CategoryItem from '../../../../molecules/pages/components/CategoryItem/CategoryItem';
import Divider from '../../../../atoms/Divider/Divider';

import useToggleFilter from '../../../../../hooks/useToggleFilter';

import { filterTypeGuard } from '../../../../../utils/filterTypeGuard';

import { allCategoriesData } from '../../../../../data/filter/allCategories';

import styles from '../CategoriesFilter/CategoriesFilter.module.scss';


import type { InitProductFilter } from '../../../../../types/productFilterType';
import type { InitBlogFilter } from '../../../../../types/blogFilterTypes';

interface CategoriesFilterProps{
    filter:InitProductFilter|InitBlogFilter
}

const CategoriesFilter:React.FC<CategoriesFilterProps> = ({filter}) => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._form)

    const dispatch = useAppDispatch()

    const handleFilter =(value:string)=>{

        const action = {
            key: 'categoryValue' as keyof InitProductFilter,
            value: value,
        };

        filterTypeGuard(dispatch, filter, action);
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
            <section className={styles.CategoriesFilter}>
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
    
export default memo(CategoriesFilter);