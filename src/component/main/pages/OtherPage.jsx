import React from 'react'
import styles from '../styles/lending.module.scss'
import image from '../../../images/Frame (4).svg'
import image02 from '../../../images/Frame (5).svg'
import image03 from '../../../images/Frame (6).svg'
import image04 from '../../../images/Frame (7).svg'
import image05 from '../../../images/Frame (8).svg'
import image06 from '../../../images/Frame (9).svg'
import image07 from '../../../images/Frame (10).svg'
import image08 from '../../../images/Frame (11).svg'
import image09 from '../../../images/Frame (12).svg'
import image10 from '../../../images/Frame (13).svg'
import image11 from '../../../images/Frame (14).svg'
function OtherPage() {
    return (
        <div className={styles.Lending}>
            <div className="container">
                <div className={styles.LendingWrapper}>
                    <h1 className={styles.LendingTitle}>Other pages</h1>
                    <div className={styles.LendingWraps}>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Pricing one</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image02} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Pricing two</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image03} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Pricing three</p>
                        </div>
                    </div>
                    <div className={styles.LendingWraps}>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image04} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Sign up one</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image05} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Sign up two</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image06} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Sign up three</p>
                        </div>
                    </div>
                    <div className={styles.LendingWraps}>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image07} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Contact one</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image08} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Contact two</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image09} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Contact three</p>
                        </div>
                    </div>
                    <div className={styles.LendingWrap}>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image10} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Blog</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image11} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Careers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherPage