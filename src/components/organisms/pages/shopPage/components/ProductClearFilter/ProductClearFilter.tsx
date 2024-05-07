import { useContext } from 'react';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';

import ClearFilter from '../../../components/ClearFilter/ClearFilter';

const ProductClearFilter:React.FC = () => {

    const { clearFilter } = useContext(ProductFilterContext);

    return (<ClearFilter clearFilterFn={clearFilter}/>)
}

export default ProductClearFilter;