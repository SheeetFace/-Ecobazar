import { useContext } from 'react';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';

import ClearFilter from '../../../components/ClearFilter/ClearFilter';

const BlogClearFilter:React.FC = () => {

    const { clearFilter } = useContext(ProductFilterContext); //!temp

    return (<ClearFilter clearFilterFn={clearFilter}/>)
}

export default BlogClearFilter;