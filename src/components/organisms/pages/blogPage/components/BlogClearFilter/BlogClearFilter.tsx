import { useContext } from 'react';

import { BlogFilterContext } from '../../../../../../context/BlogFilterContext';

import ClearFilter from '../../../components/ClearFilter/ClearFilter';

const BlogClearFilter:React.FC = () => {

    const { clearFilter } = useContext(BlogFilterContext);

    return (<ClearFilter clearFilterFn={clearFilter}/>)
}

export default BlogClearFilter;