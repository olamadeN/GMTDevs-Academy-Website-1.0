
import Navbar from '@/app/component/navbar/page';
export { metadata } from "./metadata";
import styles from '../about-us/about.module.css';
import imStyles from '../../page.module.css';
import cStyle from './courses.module.css';
import SlideUp from '@/app/component/animations/slideUp';
import SlideInRight from '@/app/component/animations/slideRight';
import CourseTabs from '@/app/component/tabs/page';
import { BriefcasePlus, CirclePile, UserRoundGroup, UserStar } from 'lucide-react';
import Contact from '@/app/component/contact/page';
const About = () => {
    return ( 
        <div className={styles.aboutCont}>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>   
                    <div className='headerTxt'>
                        <SlideUp delay={0.2} duration={0.8} distance={30}> 
                            <h1>Build skills. Create things. <br /><span style={{ color: 'var(--text-secondary)' }}>Move forward.</span></h1>
                            <br />
                            <p>Choose a discipline and progress through structured learning pathways, from foundational concepts to more advanced practice.</p>
                        </SlideUp>
                    </div>
                    
                    <div className='globeWrapper'>
                        <img className='globe' src='/images/globe.png' alt="globe" />
                    </div>
                   
                </div>
            </header>
            <section className={`${styles.aboutSection2} ${styles.aboutSection1}`}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>Our approach</h5>
                        <h2>Choose your learning path</h2>
                        <p style={{color: "#6d6a6a"}}>Our courses are delivered through live online classes in small cohorts, with practical exercises and guidance from experienced educators.</p>   
                    </div>
                    <div className={imStyles.rowPack}>
                        <div className={`${cStyle.row1} ${imStyles.row1}`}>
                            <div className={`${cStyle.aboutCard1} ${imStyles.card}`}>  
                                <div className={imStyles.imgCover}>
                                    <img src="/images/frontendBanner.jpg" alt="frontend development" />                            
                                </div> 
                                <p>Frontend Development</p>
                                <p>Learn to create the interfaces people see and interact with when they use websites and web applications.</p>
                                <div className={styles.btnPack}>
                                    <span className="pill">Beginner</span>
                                    <span className="pill">Intermediate</span>
                                    <span className="pill">Advanced</span>
                                </div>
                            </div>   
                            
                            <div className={`${cStyle.aboutCard1} ${imStyles.card}`}>
                                <div className={imStyles.imgCover}>
                                    <img src="/images/uiuxBanner.jpg" alt="UI/UX design" />
                                </div>                                                               
                                <p>UI/UX Design</p>
                                <p>Learn to understand user needs and design clear, useful and intuitive digital experiences.</p>
                                <div className={styles.btnPack}>
                                    <span className="pill">Beginner</span>
                                    <span className="pill">Intermediate</span>
                                    <span className="pill">Advanced</span>
                                </div>
                            </div>    

                            <div className={`${cStyle.aboutCard1} ${imStyles.card}`}>  
                                <div className={imStyles.imgCover}>
                                    <img src="/images/backendBanner.jpg" alt="backend development" />                             
                                </div> 
                                <p>Backend Development</p>
                                <p>Understand the systems behind digital products, including application logic, data, APIs and server-side functionality.</p>
                                <div className={styles.btnPack}>
                                    <span className="pill">Beginner</span>
                                    <span className="pill">Intermediate</span>
                                    <span className="pill">Advanced</span>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection2}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>Nine learning pathways</h5>
                        <h2>Find the level that meets you where you are.</h2>
                        <p style={{color: "#6d6a6a"}}>Each discipline has three progressive pathways. The detailed modules below are proposed curriculum content for review and confirmation.</p>   
                    </div>
                    <div id='courseTabs' className={styles.courses}>
                        <CourseTabs/>
                    </div>
                </div>
            </section>
            <section className={`${styles.aboutSection1} ${styles.aboutSection2}`}>
                <div className='container'>
                    <div className={cStyle.double}>
                        <div className={cStyle.headerContent}>
                            <div className={cStyle.headerTxt}>
                                <h5>The learning experience</h5>
                                <h2>Learn with an educator, not just a playlist.</h2>
                                <br /><br />
                                <p style={{color: "#6d6a6a"}}>Every pathway is designed around live online instruction, small learning cohorts and practical work. Students can ask questions, discuss challenges and receive guidance as they learn.</p>
                            </div>
                        </div>
                        <div className={cStyle.cardGrid}>
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UserRoundGroup color='#CB8731'/>                              
                                <p>Live classes</p>
                                <p style={{color: "#6d6a6a"}}>Interact with your educator in real time.</p>
                            </div> 
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <CirclePile color='#CB8731' />                                 
                                <p>Small cohorts</p>
                                <p style={{color: "#6d6a6a"}}>Learn in focused groups with room to participate.</p>
                            </div> 
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <BriefcasePlus color='#CB8731' />                                
                                <p>Guided practice</p>
                                <p style={{color: "#6d6a6a"}}>Apply concepts through exercises and projects.</p>
                            </div> 
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UserStar color='#CB8731' />                                     
                                <p>Practitioner educators</p>
                                <p style={{color: "#6d6a6a"}}>Learn from experienced GMTDevs developers.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id='contact' className='container'>
                    <Contact />
                </div>
            </section>
        </div>
    );
}
 
export default About;