import { useAppSelector } from '../../../../../../store/store';

import { useGetBlogsQuery } from '../../../../../../api/blogs/blogsApi';

import { useCountCategories } from '../../../../../../hooks/useCountCategories';

import CategoriesFilter from '../../../components/CategoriesFilter/CategoriesFilter';


import type { BlogDataTypes } from '../../../../../../types/blogDataTypes';


const BlogCatagoriesFilter:React.FC = () => {

    const filter =  useAppSelector((state)=>state.blogFilter)
    const countCategory = useCountCategories<BlogDataTypes>(useGetBlogsQuery,'blogs')

    return (<CategoriesFilter filter={filter} countCategory={countCategory}/>)
}

export default BlogCatagoriesFilter;