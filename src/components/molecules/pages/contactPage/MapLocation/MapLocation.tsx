import styles from '../MapLocation/MapLocation.module.scss';

const MapLocation:React.FC = () => {

    const style = {
        width: "100%",
        height: 400
    };

    return (
        <div className={styles.MapLocation}>
            <iframe
                src="https://maps.google.com/maps?q=120%20W%20Sioux%20Ave%2C%20Pierre%2C%20SD%2057501%2C%20United%20States&t=k&z=16&output=embed"
                width={style.width}
                height={style.height}
                style={{ border: 0 }}
                allowFullScreen={undefined}
                aria-hidden="false"
                tabIndex={0}
            />
        </div>
    )
}

export default MapLocation;