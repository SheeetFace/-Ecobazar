import { memo, useMemo } from 'react';

import TagItem from '../../../../molecules/pages/components/TagItem/TagItem';

import useToggleFilter from '../../../../../hooks/useToggleFilter';

import { filterTypeGuard } from '../../../../../utils/filterTypeGuard';

import { tagsData } from '../../../../../data/filter/tagsData';

import styles from '../TagFilter/TagFilter.module.scss';

import type { InitProductFilter,TChangeProductFilterFn } from '../../../../../types/productFilterType';
import type { InitBlogFilter,TChangeBlogFilterFn } from '../../../../../types/blogFilterTypes';

interface TagFilterProps{
    filter:InitProductFilter|InitBlogFilter
    changeFilter:TChangeProductFilterFn|TChangeBlogFilterFn
}

const TagFilter:React.FC<TagFilterProps> = ({filter,changeFilter}) => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._container)

    const handleFilter =(value:string)=>{

        filterTypeGuard(filter,changeFilter,'tag',value)
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