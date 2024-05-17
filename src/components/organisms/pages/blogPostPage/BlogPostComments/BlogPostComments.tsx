import usePagination from '../../../../../hooks/usePagination';

import BlogCommentCard from '../../../../molecules/card/BlogCommentCard/BlogCommentCard';
import Divider from '../../../../atoms/Divider/Divider';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { blogCommentsData } from '../../../../../data/temp/blogCommentsData';

import styles from '../BlogPostComments/BlogPostComments.module.scss';

const BlogPostComments:React.FC = () => {

    const itemsPerPage= 5;
    const totalItems = blogCommentsData.length;

    const {displayedData,currentPage,goToNextPage,goToPrevPage,goToPage} = usePagination(
        totalItems,
        itemsPerPage,
        blogCommentsData
    );

    const renderCommentCard =()=>{
        return displayedData.map((item,i)=>{
            return(
                <>
                <BlogCommentCard id={item.id}
                                 date={item.date}
                                 message={item.message}
                                 name={item.name}
                                 src={item.src}
                                 key={i}/>
                <Divider className={styles._divider} type='horizontal'/>
                </>
            )
        })
    }

    return (
        <section className={styles.BlogPostComments}>
            <h1>Comments</h1>

            <div className={styles._comments}>
                {renderCommentCard()}
            </div>

            <div className={styles._pagButtons}>
                <PaginationButtons
                                totalItems={totalItems}
                                itemsPerPage={itemsPerPage}
                                valueCurrentPage={currentPage}
                                onNextPage={goToNextPage}
                                onPrevPage={goToPrevPage}
                                onGoToPage={goToPage}
                />
            </div>
        </section>
    )
}

export default BlogPostComments;