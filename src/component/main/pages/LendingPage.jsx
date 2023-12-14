import React from 'react'
import styles from '../styles/lending.module.scss'
import image from '../../../images/Frame.svg'
import image01 from '../../../images/Frame (1).svg'
import image02 from '../../../images/Frame (3).svg'
import image03 from '../../../images/Frame (2).svg'
function LendingPage() {
    return (
        <div className={styles.Lending}>
            <div className="container">
                <div className={styles.LendingWrapper}>
                    <h1 className={styles.LendingTitle}>Landing pages</h1>
                    <div className={styles.LendingWraps}>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Landing one</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image01} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Landing two</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image03} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Landing three</p>
                        </div>
                        <div className={styles.LendingPage}>
                            <img className={styles.LendingImage} src={image02} alt="lending images" />
                            <p className={styles.LendingSubtitle}>Landing four</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LendingPage