import Header from './components/organisms/Header/Header'

import './styles/common.scss'
import './styles/buttons.scss'
import styles from '../src/app.module.scss'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
    </div>
  )
}

export default App

