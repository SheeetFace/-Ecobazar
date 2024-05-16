import SignInAlert from '../../../../molecules/pages/blogPostPage/SignInAlert/SignInAlert';

import styles from '../BlogPostLeaveComment/BlogPostLeaveComment.module.scss';


const BlogPostLeaveComment:React.FC = () => {

    //! some condition 

    return (
        <section className={styles.BlogPostLeaveComment}>
            <h1>Leave a Comment</h1>

            <div>
                <SignInAlert/>

            </div>
        </section>
    )
}

export default BlogPostLeaveComment;