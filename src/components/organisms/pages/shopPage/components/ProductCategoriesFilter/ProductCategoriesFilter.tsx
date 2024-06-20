import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';

import { useAppSelector } from '../../../../../../store/store';

const ProductCategoriesFilter:React.FC = () => {

    const filter = useAppSelector((state)=>state.productFilter)

    return (<CategoriesFilter filter={filter}/>)
}

export default ProductCategoriesFilter;