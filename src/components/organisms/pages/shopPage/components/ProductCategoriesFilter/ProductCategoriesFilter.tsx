import { useContext} from 'react';

import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';


const ProductCategoriesFilter:React.FC = () => {

    const {filter, changeFilter } = useContext(ProductFilterContext);

    return (<CategoriesFilter filter={filter} changeFilter={changeFilter}/>)
}

export default ProductCategoriesFilter;