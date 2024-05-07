
import { useContext } from 'react';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';

import TagFilter from '../../../components/TagFilter/TagFilter';

const BlogTagFilter:React.FC = () => {

    const {filter,changeFilter } = useContext(ProductFilterContext); //!temp

    return (<TagFilter  filter={filter} changeFilter={changeFilter}/>)
}

export default BlogTagFilter;