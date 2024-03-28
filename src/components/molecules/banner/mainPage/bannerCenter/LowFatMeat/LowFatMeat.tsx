import Button from '../../../../../atoms/Button/Button';

import styles from '../LowFatMeat/LowFatMeat.module.scss';

const LowFatMeat:React.FC = () => {

    return (
        <div className={styles.LowFatMeat}>
            <div className={styles._container}>

                <span className={styles._preTitle}>85% FAT FREE</span>

                <span className={styles._title}>Low-Fat Meat</span>

                <div className={styles._started}>
                    <span>Started at</span>
                    <span className={styles._price}>$79.99</span>
                </div>

                <div className={styles._wrapperButton}>
                    <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
                </div>

            </div>
        </div>
    )
}

export default LowFatMeat;