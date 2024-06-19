import { Outlet } from 'react-router-dom';

import { useAuthState } from './hooks/useAuthState';

import Divider from './components/atoms/Divider/Divider';
import Header from './components/organisms/Header/Header';
import Navigation from './components/organisms/Navigation/Navigation';
import Breadcrumb from './components/molecules/Breadcrumb/Breadcrumb';

import ProductModal from './components/organisms/modal/ProductModal/ProductModal';

import Newsletter from './components/molecules/newsletter/Newsletter/Newsletter';
import Footer from './components/organisms/Footer/Footer';

import './styles/common.scss'
import './styles/buttons.scss'
import './styles/inputs.scss'
import './styles/navLink.scss'
import './styles/select.scss'
import './styles/skeleton.scss'

import styles from '../src/app.module.scss'


function App() {

  useAuthState()

  return (
    <main className={styles.App}>

        <Header/>
        <Divider type='horizontal' className={styles._divider}/>
        <Navigation/>
        <Breadcrumb/>
              <Outlet></Outlet>
              <ProductModal/>
        <Newsletter/>
        <Footer/>

    </main>
  )
}

export default App

