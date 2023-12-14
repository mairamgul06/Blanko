import React, { useState } from 'react'
import styles from './header.module.scss'
import logo from '../../images/Image.svg'
import vector from '../../images/arrow.svg'
import icon from '../../images/Image (2).svg'
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.HeaderWrapper}>
          <div className={styles.HeaderComplate}>
            <img className={styles.HeaderLogo} src={logo} alt="header images" />
            <div className={styles.HeaderBlank}>mail@blanko.com</div>
          </div>
          <div className={styles.HeaderComplate}>
            <div className={styles.HeaderFlex}>
              <span className={styles.HeaderList}>Landing</span>
              <img className={styles.HeaderVector} src={vector} alt="header images" />
            </div>
            <div className={styles.HeaderFlex}>
              <span className={styles.HeaderList}>All pages</span>
              <img className={styles.HeaderVector} src={vector} alt="header images" />
            </div>
            <div className={styles.HeaderFlex}>
              <span className={styles.HeaderList}>Template</span>
              <img className={styles.HeaderVector} src={vector} alt="header images" />
            </div>
          </div>
          <div className={styles.HeaderComplate}>
            <div className={styles.HeaderFlex}>
              <span className={styles.HeaderList}>Sign up</span>
              <img className={styles.HeaderVector} src={vector} alt="header images" />
            </div>
            <button className={styles.HeaderButton}>Purchase template</button>
          </div>
          <div className={styles.HeaderBurger} onClick={() => setOpen(!open)}>
            <img className={styles.HeaderBurgerIcon} src={icon} alt="header images" />
          </div>
          {
            open && (
              <div className={styles.HeaderMenu}>
                <span className={styles.HeaderList}>mail@blanko.com</span>
                <span className={styles.HeaderList}>Landing</span>
                <span className={styles.HeaderList}>All pages</span>
                <span className={styles.HeaderList}>Template</span>
                <span className={styles.HeaderList}>Sign up</span>
                <span className={styles.HeaderList}>Purchase template</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header