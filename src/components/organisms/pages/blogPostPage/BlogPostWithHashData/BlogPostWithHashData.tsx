import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetBlogsQuery } from "../../../../../api/blogs/blogsApi";

import BlogPostContent from "../BlogPostContent/BlogPostContent";
import FullScreenLoader from "../../../FullScreenLoader/FullScreenLoader";


const BlogPostWithHashData:React.FC<{ hash: string }> = ({ hash }) => {

    const navigate = useNavigate();
    const { data, isLoading } = useGetBlogsQuery();

    const hashData = data?.list?.find((blog)=>blog.id === hash);

    useEffect(() => {
        if(!isLoading && !hashData) navigate('/blog');
    },[hashData,isLoading]);

    if(isLoading) return <FullScreenLoader/>;
    if(hashData) return <BlogPostContent data={hashData}/>;
    return null;
}

export default BlogPostWithHashData;