
import styles from './App.module.scss'
import Header from './component/header/Header'
import Main from './component/main/Main'
import Footer from './component/footer/Footer'
function App() {

  return (
    <div className={styles.App}>
       <Header/>
       <Main/>
       <Footer/>
    </div>
  )
}

export default App
