import Divider from './components/atoms/Divider/Divider';
import Header from './components/organisms/Header/Header';
import Navigation from './components/organisms/Navigation/Navigation';

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
    </div>
  )
}

export default App

