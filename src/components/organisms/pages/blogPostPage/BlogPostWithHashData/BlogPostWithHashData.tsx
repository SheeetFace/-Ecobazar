import { useGetBlogsQuery } from "../../../../../api/blogs/blogsApi";
import useFetchDataByHash from "../../../../../hooks/useFetchDataByHash";

import BlogPostContent from "../BlogPostContent/BlogPostContent";
import FullScreenLoader from "../../../FullScreenLoader/FullScreenLoader";

import { BlogDataTypes } from "../../../../../types/blog/blogDataTypes";


const BlogPostWithHashData:React.FC<{ hash: string }> = ({ hash }) => {

    const {hashData, isLoading} = useFetchDataByHash<BlogDataTypes>(hash,useGetBlogsQuery,'/blog')

    if(isLoading) return <FullScreenLoader/>;
    if(hashData) return <BlogPostContent data={hashData}/>;
    return null;
}

export default BlogPostWithHashData;