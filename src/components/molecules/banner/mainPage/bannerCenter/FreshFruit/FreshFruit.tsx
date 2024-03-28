import Button from '../../../../../atoms/Button/Button';
import LabelBadge from '../../../../../atoms/LabelBadge/LabelBadge';

import styles from '../FreshFruit/FreshFruit.module.scss';

const FreshFruit:React.FC = () => {

    return (
        <div className={styles.FreshFruit}>
            <div className={styles._container}>

                <span className={styles._preTitle}>SUMMER SALE</span>

                <span className={styles._title}>100% Fresh Fruit</span>

                <div className={styles._upTo}>
                    <span>Up to</span>
                    <LabelBadge label='63% OFF' className={styles._label}/>
                </div>

                <div className={styles._wrapperButton}>
                    <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
                </div>

            </div>
        </div>
    )
}

export default FreshFruit;