import Header from './components/organisms/Header/Header'

import './styles/common.scss'
import './styles/buttons.scss'
import styles from '../src/app.module.scss'

// import StoreLocation from './components/molecules/novigations/StoreLocation/StoreLocation'

function App() {

  return (
    <div className={styles.App}>

    <Header/>
      {/* <div className='header'>
        <div className='center'>
          <div className='container'>
            <div className='left'>
              <StoreLocation/>
              </div>
            <div className='right'>Google Font</div>
          </div>
        </div>
      </div> */}

      </div>
  )
}

export default App

