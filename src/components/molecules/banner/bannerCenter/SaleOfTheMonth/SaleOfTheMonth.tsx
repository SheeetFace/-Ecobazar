import Timer from '../../../Timer/Timer';
import Button from '../../../../atoms/Button/Button';

import styles from '../SaleOfTheMonth/SaleOfTheMonth.module.scss';

const SaleOfTheMonth:React.FC = () => {

    return (
        <div className={styles.SaleOfTheMonth}>
            <div className={styles._container}>

                <span className={styles._preTitle}>BEST DEAL</span>

                <span className={styles._title}>Sale of the Month</span>

                <div className='center'><Timer color='white'/></div>
                
                <div className={styles._wrapperButton}>
                    <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
                </div>

            </div>
        </div>
    )
}

export default SaleOfTheMonth;