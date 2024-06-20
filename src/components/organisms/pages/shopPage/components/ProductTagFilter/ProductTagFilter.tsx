import { useAppSelector } from '../../../../../../store/store';

import TagFilter from '../../../components/TagFilter/TagFilter';

const ProductTagFilter:React.FC = () => {

    const filter = useAppSelector((state)=>state.productFilter)

    return (<TagFilter  filter={filter}/>)
}

export default ProductTagFilter;