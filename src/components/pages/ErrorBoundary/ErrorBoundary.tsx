import { NavLink } from 'react-router-dom';

import Header from '../../organisms/Header/Header';
import Divider from '../../atoms/Divider/Divider';
import Navigation from '../../organisms/Navigation/Navigation';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import Newsletter from '../../molecules/newsletter/Newsletter/Newsletter';
import Footer from '../../organisms/Footer/Footer';

import Button from '../../atoms/Button/Button';

import img404 from '../../../assets/404/404.webp'

import styles from '../ErrorBoundary/ErrorBoundary.module.scss';

const ErrorBoundary:React.FC = () => {

    return (
        <section className={styles.ErrorBoundary}>

            <Header/>
            <Divider type='horizontal' className={styles._divider}/>
            <Navigation/>
            <Breadcrumb/>

            <div className='center'>
                <div className={styles._container}>
                    <img src={img404} alt='Oops! Page Not Found'/>

                    <span className={styles._tittle}>Oops! Page Not Found</span>
                    <span>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</span>
                    
                    <NavLink className={styles._navLink} to='/'>
                        <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' type='button' text='Back To Home'/>
                    </NavLink>
                </div>
            </div>

            <Newsletter/>
            <Footer/>

        </section>
    )
}

export default ErrorBoundary;