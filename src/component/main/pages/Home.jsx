import React from 'react'
import styles from '../styles/home.module.scss'
import starSvg from '../../../images/Vector.svg'
import image from '../../../images/Image.png'
function Home() {
    return (
        <div className={styles.Home}>
            <div className="container">
                <div className={styles.HomeWrapper}>
                    <div className={styles.HomeComplate}>
                        <div className={styles.HomeDiligent}>
                            <h1 className={styles.HomeTitle}>Blanko template</h1>
                            <span className={styles.HomeSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris <br /> porttitor amet volutpat.</span>
                            <div className={styles.HomeTool}>
                                <button className={styles.HomeButton}>Purchase template</button>
                                <button className={styles.HomeBtn}>Other templates</button>
                            </div>
                        </div>
                        <div className={styles.HomeDirect}>
                            <div className={styles.HomeFlex}>
                                <img className={styles.HomeSvg} src={starSvg} alt="main images" />
                                <img className={styles.HomeSvg} src={starSvg} alt="main images" />
                                <img className={styles.HomeSvg} src={starSvg} alt="main images" />
                                <img className={styles.HomeSvg} src={starSvg} alt="main images" />
                                <img className={styles.HomeSvg} src={starSvg} alt="main images" />
                            </div>
                            <span className={styles.HomeText}>
                                “Working with the Mabel template has <br /> been a breeze from start to finish.”
                            </span>
                            <div className={styles.HomePass}>
                                <p className={styles.HomeList}>Rated 5/5</p>
                                <p className={styles.HomeLists}>- 129 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.HomeGenerate}>
                        <img className={styles.HomeImage} src={image} alt="main images" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home