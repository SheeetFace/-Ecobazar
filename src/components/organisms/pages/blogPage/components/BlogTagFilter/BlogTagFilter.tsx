
import { useContext } from 'react';

import { BlogFilterContext } from '../../../../../../context/BlogFilterContext';

import TagFilter from '../../../components/TagFilter/TagFilter';

const BlogTagFilter:React.FC = () => {

    const {filter,changeFilter } = useContext(BlogFilterContext); 

    return (<TagFilter  filter={filter} changeFilter={changeFilter}/>)
}

export default BlogTagFilter;