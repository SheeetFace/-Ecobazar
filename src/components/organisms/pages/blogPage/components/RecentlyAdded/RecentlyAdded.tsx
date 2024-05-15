
import RecentlyAddedBlogCard from '../../../../../molecules/card/RecentlyAddedBlogCard/RecentlyAddedBlogCard';

import { blogsData } from '../../../../../../data/temp/blogsData';

import styles from '../RecentlyAdded/RecentlyAdded.module.scss';

const RecentlyAdded:React.FC = () => {

    const recentlyBlogs = blogsData.slice((blogsData.length-3),blogsData.length)

    const renderRecentlyBlogs=()=>{
        return recentlyBlogs.reverse().map((item,i)=>{
            return <RecentlyAddedBlogCard  
                                        title={item.title}
                                        src={item.src}
                                        date={item.date}
                                        id={item.id}
                                        key={i}
                    />
        })
    }


    return (
        <div className={styles.RecentlyAdded}>
            <h1>Recently Added</h1>
            {renderRecentlyBlogs()}
        </div>
    )
}

export default RecentlyAdded;