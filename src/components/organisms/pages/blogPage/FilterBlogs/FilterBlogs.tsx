import SearchFilter from '../components/SearchFilter/SearchFilter';
import BlogCatagoriesFilter from '../components/BlogCatagoriesFilter/BlogCatagoriesFilter';
import BlogTagFilter from '../components/BlogTagFilter/BlogTagFilter';
import BlogClearFilter from '../components/BlogClearFilter/BlogClearFilter';

import Button from '../../../../atoms/Button/Button';

import useToggleFilter from '../../../../../hooks/useToggleFilter';

import FilterIcon from '../../../../atoms/icon/navigate/FilterIcon';

import styles from '../FilterBlogs/FilterBlogs.module.scss';

const FilterBlogs:React.FC = () => {
    const [, bodyClass, toggle] = useToggleFilter("");

    return (
        <section className={styles.FilterBlogs}>

            <div className={styles._button} onClick={toggle}>
            <Button
                className="ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight"
                text="Filter"
                type="button"
                icon={<FilterIcon className="" />}
                ariaLabel='Toggle show filters'
            />
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