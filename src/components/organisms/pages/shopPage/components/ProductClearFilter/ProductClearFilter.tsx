import { useAppDispatch } from '../../../../../../store/store';

import { clearFilter } from '../../../../../../store/slices/productFilterSlice';

import ClearFilter from '../../../components/ClearFilter/ClearFilter';

const ProductClearFilter:React.FC = () => {

    const dispatch = useAppDispatch()

    const clearFilterFn = ()=>{
        dispatch(clearFilter())
    }

    return (<ClearFilter clearFilterFn={clearFilterFn}/>)
}

export default ProductClearFilter;