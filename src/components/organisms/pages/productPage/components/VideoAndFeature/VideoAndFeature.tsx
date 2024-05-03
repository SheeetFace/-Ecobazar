import { memo } from 'react';

import Video from '../../../../../molecules/pages/productPage/Video/Video';
import Feature from '../../../../Feature/Feature';

import { featureProductPageData } from '../../../../../../data/feature';

import styles from '../VideoAndFeature/VideoAndFeature.module.scss';

const VideoAndFeature:React.FC = () => {

    return (
        <section className={styles.VideoAndFeature}>
            <Video/>
            <Feature data={featureProductPageData} 
                     className={styles._features} 
            />
        </section>
    )
}

export default memo(VideoAndFeature);
