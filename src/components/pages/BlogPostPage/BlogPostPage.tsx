import useConditionalNavigation from '../../../hooks/useConditionalNavigation';

import useScrollToTop from '../../../hooks/useScrollToTop';

import BlogPostContent from '../../organisms/pages/blogPostPage/BlogPostContent/BlogPostContent';
import BlogPostWithHashData from '../../organisms/pages/blogPostPage/BlogPostWithHashData/BlogPostWithHashData';

const BlogPostPage:React.FC = () => {
    useScrollToTop(0,'instant',70)

    const {data,hash} = useConditionalNavigation('/blog');

    if(data) return <BlogPostContent data={data}/>
    else if(!data && hash) return <BlogPostWithHashData hash={hash}/>
    else null
    
}

export default BlogPostPage;