import { memo, useContext, useMemo } from 'react';

import TagItem from '../../../../../molecules/pages/shopPage/TagItem/TagItem';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import { FilterContext } from '../../../../../../contexts/FilterContext';

import { tagsData } from '../../../../../../data/filter/tagsData';

import styles from '../TagFilter/TagFilter.module.scss';

const TagFilter:React.FC = () => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._container)
    const {filter,changeFilter } = useContext(FilterContext);

    const handleFilter =(value:string)=>{
        changeFilter('tag',value)
    }
    
    const renderTags = useMemo(()=>{
        return tagsData.map((item,i)=>{
            return(
                <TagItem tag={item} 
                        fn={()=>handleFilter(item)} 
                        chooseItem={filter.tag}
                        key={i}
                />
            )
        })
    },[filter.tag])

    return (
        <section className={styles.TagFilter}>

            <div className={styles._header}>
                <h2>Tag</h2>
                <h1 className={arrowClass} onClick={toggle}>
                    &#11165;
                </h1>
            </div>

            <div className={bodyClass}>
                {renderTags}
            </div>

        </section>
    )
}

export default memo(TagFilter);