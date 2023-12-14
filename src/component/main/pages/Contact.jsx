import React from 'react'
import style from '../styles/contact.module.scss'
import styles from '../styles/home.module.scss'
import starSvg from '../../../images/vector.svg'
function Contact() {
    return (
        <div className={style.Contact}>
            <div className="container">
                <div className={style.ContactWrapper}>
                    <div className={styles.HomeComplate}>
                        <div className={styles.HomeDiligent}>
                            <h1 className={styles.HomeTitle}>Ready to scale <br /> your business?</h1>
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
                    <div className={style.ContactGenerate}>
                       <h2 className={style.ContactTitle}>Sign up for free</h2>
                       <span className={style.ContactList}>Your email</span>
                       <input className={style.ContactInput} type="text" placeholder='example@mail.com'/>
                       <span className={style.ContactList}>Your password</span>
                       <input className={style.ContactInput} type="password" placeholder='*************'/>
                       <div className={style.ContactTool}>
                        <input className={style.ContactCheck} type="checkbox"  />
                        <span className={style.ContactGenerateList}> I agree to the privacy policy</span>
                       </div>
                       <button className={style.ContactButton}>Submit</button>
                      <div className={style.ContactFlex}>
                      <span className={style.ContactList}>Already have an account?</span>
                       <a className={style.ContactLink} href="">Sign in.</a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact