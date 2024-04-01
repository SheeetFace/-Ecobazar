import Divider from './components/atoms/Divider/Divider';
import Header from './components/organisms/Header/Header';
import Navigation from './components/organisms/Navigation/Navigation';
import Breadcrumb from './components/molecules/Breadcrumb/Breadcrumb';

import MainPage from './components/pages/MainPage/MainPage';
import LoginPage from './components/pages/LoginPage/LoginPage';

import Newsletter from './components/molecules/newsletter/Newsletter/Newsletter';
import Footer from './components/organisms/Footer/Footer';

import './styles/common.scss'
import './styles/buttons.scss'
import './styles/inputs.scss'

import styles from '../src/app.module.scss'

import { Routes, Route, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className={styles.App}>

        <Header/>
        <Divider type='horizontal' className={styles._divider}/>
        <Navigation/>
        <Breadcrumb/>

        <Outlet></Outlet>
        {/* <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="login" element={<LoginPage/>} />
        </Routes> */}

        <Newsletter/>
        <Footer/>


    </div>


    // <BrowserRouter>
    //   <div className={styles.App}>
    //     <Header/>
    //     <Divider type='horizontal' className={styles._divider}/>
    //     <Navigation/>
    //     <Breadcrumb/>


    // <Routes>
    //   <Route path="*" element={<MainPage/>} />
    //   <Route path="login" element={<LoginPage/>} />
    // </Routes>

    // <Newsletter/>
    // <Footer/>

    // </div>
    // </BrowserRouter>
  )
}

export default App

