import SignInAlert from '../../../../molecules/pages/blogPostPage/SignInAlert/SignInAlert';
import TextAreaAndSubmit from '../components/TextAreaAndSubmit/TextAreaAndSubmit';

import styles from '../BlogPostLeaveComment/BlogPostLeaveComment.module.scss';


const BlogPostLeaveComment:React.FC = () => {

    //! some condition 

    return (
        <section className={styles.BlogPostLeaveComment}>
            <h1>Leave a Comment</h1>

            <div className={styles._container}>
                <SignInAlert/>
                <TextAreaAndSubmit/>
            </div>
        </section>
    )
}

export default BlogPostLeaveComment;