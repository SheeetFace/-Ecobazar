import { NavLink } from 'react-router-dom';

import Timer from '../../../../pages/mainPage/Timer/Timer';
import Button from '../../../../../atoms/Button/Button';

import styles from '../SaleOfTheMonth/SaleOfTheMonth.module.scss';

const SaleOfTheMonth:React.FC = () => {

    return (
        <section className={styles.SaleOfTheMonth} aria-label="BEST DEAL Banner - Sale of the Month">
            <div className={styles._container}>

                <span className={styles._preTitle}>BEST DEAL</span>

                <span className={styles._title}>Sale of the Month</span>

                <div className='center'><Timer color='white'/></div>
                
                <div className={styles._wrapperButton}>
                    <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for Sale of the Month'>
                        <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary buttonMaxHeight' type='button' text='Shop now &#10132;'/>
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default SaleOfTheMonth;