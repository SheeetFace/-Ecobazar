import Input from '../../../../../atoms/form/Input/Input';
import Divider from '../../../../../atoms/Divider/Divider';

import styles from '../SearchFilter/SearchFilter.module.scss';

const SearchFilter:React.FC = () => {

    return (
        <section className={styles.SearchFilter}>
                <Input placeholder='Search'
                   type='text' 
                //    forwardRef={ref}
                   className="_searchInputBlog"
                   maxLength={30}
            />

            <Divider className={styles._divider} type='horizontal'/>
        </section>
    )
}

export default SearchFilter;