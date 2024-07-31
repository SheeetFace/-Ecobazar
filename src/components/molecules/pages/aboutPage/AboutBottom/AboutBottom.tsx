import { NavLink } from 'react-router-dom';

import CheckCircleIcon from '../../../../atoms/icon/info/CheckCircleIcon/CheckCircleIcon';
import Button from '../../../../atoms/Button/Button';
import person3 from '../../../.././../assets/persons/person3.webp'

import styles from '../AboutBottom/AboutBottom.module.scss';

const AboutBottom:React.FC = () => {

    return (
        <section className={styles.AboutBottom}>

            <div className='center'>
                <div className={styles._content}>
                    <div className={styles._container}>
                        <span className={styles._title}>We Delivered, You Enjoy Your Order.</span>
                        <span> Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</span>

                        <div className={styles._wrapper}>
                            <div className={styles._check}>
                                <CheckCircleIcon/>
                                <span>Sed in metus pellentesque.</span>
                            </div>
                            <div className={styles._check}>
                                <CheckCircleIcon/>
                                <span>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</span>
                            </div>
                            <div className={styles._check}>
                                <CheckCircleIcon/>
                                <span>Maecenas ut nunc fringilla erat varius.</span>
                            </div>
                        </div>

                        <NavLink to='/shop' className={styles._navLink}>
                            <Button className='ButtonFilledOval fillGreen colorTextGrey1'
                                    type='button'
                                    text='Shop now &#10132;'
                                    ariaLabel='Go To Shop button'/>
                        </NavLink>

                    </div>

                    <div className={styles._img}>
                        <img src={person3} alt='Grocery delivery person'/>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutBottom;