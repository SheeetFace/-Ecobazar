import styles from '../Video/Video.module.scss';

const Video:React.FC = () => {

    return (
        <section className={styles.Video}>
            <iframe 
                src="https://www.youtube.com/embed/a_0AgvcCQ20?si=_jzywL3Z0dR1yLut"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </section>
    )
}

export default Video;