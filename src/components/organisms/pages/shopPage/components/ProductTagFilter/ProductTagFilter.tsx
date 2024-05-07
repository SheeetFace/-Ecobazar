import { useContext } from 'react';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';

import TagFilter from '../../../components/TagFilter/TagFilter';

const ProductTagFilter:React.FC = () => {

    const {filter,changeFilter } = useContext(ProductFilterContext);

    return (<TagFilter  filter={filter} changeFilter={changeFilter}/>)
}

export default ProductTagFilter;