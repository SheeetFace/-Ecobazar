
import { blogPostData } from '../../../../../data/temp/blogPostData';

import styles from '../BlogPostDetail/BlogPostDetail.module.scss';

interface BlogPostDetailProps{
    id:string
}


const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ id }) => {

    console.log(id)

    const renderBlogPost = () => {
      return (
        <>
          {blogPostData.map((item, index) => {
            switch (item.type) {
              case 'header':
                return <h1 key={index} className={styles._blogPostHeader}>{item.text}</h1>
              case 'paragraph':
                return <p key={index} className={styles._blogPostParagraph}>{item.text}</p>
              case 'image':
                return (
                  <div key={index} className={`${styles._blogPostImages} ${styles['_imagesCount' + item.images?.length]}`}>
                    {item.images?.map((img, i) => (
                      <img key={i} src={img.src} alt={img.alt} className={styles._blogPostImage} />
                    ))}
                  </div>
                );
              case 'list':
                return (
                  <ul key={index} className={styles._blogPostList}>
                    {item.textList?.map((listItem, i) => (
                      <li key={i} className={styles._blogPostListItem}>{listItem.text}</li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </>
      );
    };
  
    return (
      <section className={styles._BlogPostDetail}>
        {renderBlogPost()}
      </section>
    );
  };
  
  export default BlogPostDetail;