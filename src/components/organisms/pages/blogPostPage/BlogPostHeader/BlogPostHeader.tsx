import Info from '../../../../molecules/card/BlogCard/components/Info/Info';
import SocialMediaIcons from '../../../../molecules/SocialMediaIcons/SocialMediaIcons';
import OwnerBlogCard from '../../../../molecules/card/OwnerBlogCard/OwnerBlogCard';
import Divider from '../../../../atoms/Divider/Divider';

import styles from '../BlogPostHeader/BlogPostHeader.module.scss';

interface DataProps{
    id:string,
    category:string,
    owner:string,
    commentsCount:string,
    title:string,
    date:string,
    src:string,
}
interface BlogPostHeaderProps{
    data: DataProps
}

const BlogPostHeader:React.FC<BlogPostHeaderProps>=({data})=> {

    const {category, owner,commentsCount,title,date,src} = data;

    return (
        <section className={styles.BlogPostHeader}>
            <h1>{title}</h1>

            <div className={styles._imgContainer}>
                <img className={styles._backgroundImage} src={src} alt={title}/>
                <img className={styles._foregroundImage} src={src} alt={title}/>
            </div>

            <div className={styles._postInfo}>
                <Info   count={commentsCount} 
                        owner={owner} 
                        category={category}
                />
            </div>

            <div className={styles._ownerAndSocial}>
                <OwnerBlogCard date={date}/>
                <SocialMediaIcons/>
            </div>

            <Divider type='horizontal' className={styles._divider}/>

        </section>
    )
}

export default BlogPostHeader;