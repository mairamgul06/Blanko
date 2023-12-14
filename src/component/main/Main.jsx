import React from 'react'
import styles from './main.module.scss'
import Home from '../main/pages/Home'
import Content from './pages/Content'
import LendingPage from './pages/LendingPage'
import OtherPage from './pages/OtherPage'
import Contact from './pages/Contact'
function Main() {
  return (
    <div className={styles.Main}>
      <Home/>
      <Content/>
      <LendingPage/>
      <OtherPage/>
      <Contact/>
    </div>
  )
}

export default Main