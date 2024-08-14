import SearchFilter from '../components/SearchFilter/SearchFilter';
import BlogCatagoriesFilter from '../components/BlogCatagoriesFilter/BlogCatagoriesFilter';
import BlogTagFilter from '../components/BlogTagFilter/BlogTagFilter';
import BlogClearFilter from '../components/BlogClearFilter/BlogClearFilter';
import ButtonToggleFilter from '../../../../molecules/button/ButtonToggleFilter/ButtonToggleFilter';

import useToggleFilter from '../../../../../hooks/useToggleFilter';

import styles from '../FilterBlogs/FilterBlogs.module.scss';

const FilterBlogs:React.FC = () => {
    const [, bodyClass, toggle] = useToggleFilter("");

    return (
        <section className={styles.FilterBlogs}>

            <div className={styles._button}>
                <ButtonToggleFilter toggle={toggle}/>
            </div>

            <div className={bodyClass}>
                <SearchFilter/>
            </div>
            <div className={bodyClass}>
                <BlogCatagoriesFilter/>
            </div>
            <div className={bodyClass}>
                <BlogTagFilter/>
            </div>
            <div className={bodyClass}>
                <BlogClearFilter/>
            </div>
            
        </section>
    )
}

export default FilterBlogs;