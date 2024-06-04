import styles from '../Loader/Loader.module.scss';

interface LoaderProps{
    size?:string
}

const Loader:React.FC<LoaderProps> = ({size='1rem'}) => {

    return (
        <div className={styles.Loader}>
            <div style={{fontSize:size}}>

                <div className={styles._spinner}><span>🥦</span></div>

                <div className={styles._loading}>
                    <span>Loading</span>
                </div>
            </div>
        </div>
    )
}

export default Loader;