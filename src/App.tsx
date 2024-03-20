import Divider from './components/atoms/Divider/Divider';
import Header from './components/organisms/Header/Header';
import Navigation from './components/organisms/Navigation/Navigation';
import Breadcrumb from './components/molecules/Breadcrumb/Breadcrumb';


import Newsletter from './components/molecules/Newsletter/Newsletter';
import Footer from './components/organisms/Footer/Footer';


import './styles/common.scss'
import './styles/buttons.scss'
import './styles/inputs.scss'
import styles from '../src/app.module.scss'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <Divider type='horizontal'/>
      <Navigation/>
      <Breadcrumb/>

      <div style={{height:'90lvh', backgroundColor:'grey'}}>
        content
      </div>

      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default App

