import { memo, useContext, useMemo, useState } from 'react';

import TagItem from '../../../../../molecules/pages/shopPage/TagItem/TagItem';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import { FilterContext } from '../../../../../../contexts/FilterContext';

import { tags } from '../../../../../../data/filter/tags';

import styles from '../TagFilter/TagFilter.module.scss';

const TagFilter:React.FC = () => {

    const [chooseItem, setChoose] = useState<number|null>(null)

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._container)
    const {changeFilter } = useContext(FilterContext);

    const handleFilter =(value:string,i:number)=>{
        setChoose(i)
        changeFilter('tag',value)
    }
    
    const renderTags = useMemo(()=>{
        return tags.map((item,i)=>{
            return(
                <TagItem tag={item} 
                        fn={()=>handleFilter(item,i)} 
                        chooseItem={chooseItem}
                        i={i}
                        key={i}
                />
            )
        })
    },[chooseItem])

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