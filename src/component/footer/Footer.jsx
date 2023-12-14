import React from 'react'
import styles from './footer.module.scss'
import intagram from '../../images/instagram.svg'
import twetter from '../../images/Vector (1).svg'
import facebook from '../../images/Vector (2).svg'
import webflow from '../../images/webflow.svg'
import image from '../../images/Image.svg'
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className="container">
      <div className={styles.FooterWrapper}>
        <div className={styles.FooterFirst}>
          <img className={styles.FooterImage} src={image} alt="footer images" />
          <button className={styles.FooterButton}>Get on Webflow</button>
        </div>
        <div className={styles.FooterSecond}>
          <div className={styles.FooterFlex}>
            <span className={styles.FooterList}>Showcase</span>
            <span className={styles.FooterList}>Landing one</span>
            <span className={styles.FooterList}>Sign up</span>
            <span className={styles.FooterList}>Other templates</span>
          </div>
          <div className={styles.FooterWrap}>
            <div className={styles.FooterLogo}><img src={intagram} alt="footer images" /></div>
            <div className={styles.FooterLogo}><img src={twetter} alt="footer images" /></div>
            <div className={styles.FooterLogo}><img src={facebook} alt="footer images" /></div>
          </div>
        </div>
        <div className={styles.FooterThird}>
          <div className={styles.FooterDirect}>
            <div className={styles.FooterLink}>Powered by</div>
            <img className={styles.FooterImg} src={webflow} alt="footer images" />
            <div className={styles.FooterLink}>Designed by</div>
            <div className={styles.FooterLinks}>Veljko</div>
          </div>
          <div className={styles.FooterLast}>
            <span className={styles.FooterLink}>Contact</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer