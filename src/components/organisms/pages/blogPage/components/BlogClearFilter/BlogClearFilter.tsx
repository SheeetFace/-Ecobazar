import { useAppDispatch } from '../../../../../../store/store';

import { clearFilter } from '../../../../../../store/slices/blogFilterSlice';

import ClearFilter from '../../../components/ClearFilter/ClearFilter';

const BlogClearFilter:React.FC = () => {

    const dispatch = useAppDispatch()

    const clearFilterFn =()=>{
        dispatch(clearFilter())
    }

    return (<ClearFilter clearFilterFn={clearFilterFn}/>)
}

export default BlogClearFilter;