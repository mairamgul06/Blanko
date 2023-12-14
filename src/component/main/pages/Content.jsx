import React from 'react'
import styles from '../styles/content.module.scss'
import logo from '../../../images/Image (3).svg'
import logo01 from '../../../images/Image (1).svg'
import logo02 from '../../../images/Image (2).svg'
import drukSvg from '../../../images/druk.svg'
import image from '../../../images/Image (1).png'
function Content() {
    return (
        <div className={styles.Content}>
            <div className="container">
                <div className={styles.ContentWrapper}>
                    <div className={styles.ContentWraps}>
                        <div className={styles.ContentDesing}>
                            <div className={styles.ContentLogo}>
                                <img src={logo} alt="content images" />
                            </div>
                            <div className={styles.ContentList}>
                                <span className={styles.ContentLetter}>Speed</span>
                                <p className={styles.ContentText}>Open a commercial-grade current <br /> account from anywhere</p>
                            </div>
                        </div>
                        <div className={styles.ContentDesing}>
                            <div className={styles.ContentLogo}>
                                <img src={logo01} alt="content images" />
                            </div>
                            <div className={styles.ContentList}>
                                <span className={styles.ContentLetter}>Design</span>
                                <p className={styles.ContentText}>Open a commercial-grade current <br /> account from anywhere</p>
                            </div>
                        </div>
                        <div className={styles.ContentDesing}>
                            <div className={styles.ContentLogo}>
                                <img src={logo02} alt="content images" />
                            </div>
                            <div className={styles.ContentList}>
                                <span className={styles.ContentLetter}>Modularity</span>
                                <p className={styles.ContentText}>Open a commercial-grade current <br /> account from anywhere</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ContentDirect}>
                        <div className={styles.ContentComplate}>
                            <img className={styles.ContentImg} src={drukSvg} alt="content images" />
                            <h2 className={styles.ContentTitle}>
                            “Join a community of industry <br /> leading professionals. Join a <br /> community of industry leading <br /> professionals.“
                            </h2>
                            <span className={styles.ContentName}>Laura Paula</span>
                            <p className={styles.ContentFiture}>Director @Company</p>
                            <div className={styles.ContentTool}>
                                <p className={styles.ContentBlock}></p>
                                <p className={styles.ContentBlocks}></p>
                            </div>
                        </div>
                        <div className={styles.ContentGenerate}>
                            <img src={image} alt="content images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content