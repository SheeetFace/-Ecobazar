import Loader from '../../molecules/Loader/Loader';

import styles from '../FullScreenLoader/FullScreenLoader.module.scss';

import type { MutableRefObject } from 'react';

interface FullScreenLoaderProps{
    loadingRef?: MutableRefObject<HTMLDivElement | null>
    position?:'fixed'|'static'
}

const FullScreenLoader:React.FC<FullScreenLoaderProps> = ({loadingRef=null, position='static'}) => {

    const style = position === 'fixed' ? `${styles._fixed}` :`${styles._static}`

    return(
        <div className={style} ref={loadingRef}>
            <div className={styles._container}>
                <Loader size='3rem' />
            </div>
        </div>
    )
}

export default FullScreenLoader;