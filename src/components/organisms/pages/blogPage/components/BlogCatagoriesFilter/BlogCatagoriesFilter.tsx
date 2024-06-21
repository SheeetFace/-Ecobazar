import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';

import { useAppSelector } from '../../../../../../store/store';

const BlogCatagoriesFilter:React.FC = () => {

    const filter =  useAppSelector((state)=>state.blogFilter)

    return (<CategoriesFilter filter={filter}/>)
}

export default BlogCatagoriesFilter;