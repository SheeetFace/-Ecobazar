import { useContext} from 'react';

import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';

import { BlogFilterContext } from '../../../../../../context/BlogFilterContext';

const BlogCatagoriesFilter:React.FC = () => {

    const {filter, changeFilter } = useContext(BlogFilterContext);
    
    return (<CategoriesFilter filter={filter} changeFilter={changeFilter}/>)
}

export default BlogCatagoriesFilter;