import { memo, useMemo } from 'react';

import { useAppDispatch } from '../../../../../store/store';

import TagItem from '../../../../molecules/pages/components/TagItem/TagItem';

import useToggleFilter from '../../../../../hooks/useToggleFilter';

import { filterTypeGuard } from '../../../../../utils/filterTypeGuard';

import { tagsData } from '../../../../../config/filter/tagsDataConfig';

import styles from '../TagFilter/TagFilter.module.scss';

import type { InitProductFilter } from '../../../../../types/product/productFilterType';
import type { InitBlogFilter} from '../../../../../types/blog/blogFilterTypes';

interface TagFilterProps{
    filter:InitProductFilter|InitBlogFilter
}

const TagFilter:React.FC<TagFilterProps> = ({filter}) => {

    const dispatch = useAppDispatch()

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._container)

    const handleFilter =(value:string)=>{

        const action = {
            key: 'tag' as keyof InitProductFilter,
            value: value,
        };

        filterTypeGuard(dispatch, filter, action);
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