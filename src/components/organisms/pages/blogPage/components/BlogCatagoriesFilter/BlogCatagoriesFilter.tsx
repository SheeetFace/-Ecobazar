import { useContext} from 'react';

import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';

const BlogCatagoriesFilter:React.FC = () => {

    const {filter, changeFilter } = useContext(ProductFilterContext); //! TEMP

    return (<CategoriesFilter filter={filter} changeFilter={changeFilter}/>)
}

export default BlogCatagoriesFilter;