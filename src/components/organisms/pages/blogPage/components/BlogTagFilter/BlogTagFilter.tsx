import { useAppSelector } from '../../../../../../store/store';

import TagFilter from '../../../components/TagFilter/TagFilter';

const BlogTagFilter:React.FC = () => {

    const filter =  useAppSelector((state)=>state.blogFilter)

    return (<TagFilter  filter={filter}/>)
}

export default BlogTagFilter;