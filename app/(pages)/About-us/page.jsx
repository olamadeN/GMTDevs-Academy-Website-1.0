
import Navbar from '@/app/component/navbar/page';
export { metadata } from "./metadata";
import styles from './about.module.css';
import imStyles from '../../page.module.css';
import { BriefcasePlus, CirclePile, GraphHub, MoveRight, UserRoundGroup, UsersRoundCollaboration, UserStar } from 'lucide-react';
import AcademySection from '@/app/component/academySection/academy';
import Link from 'next/link';
import SlideUp from '@/app/component/animations/slideUp';
import SlideInRight from '@/app/component/animations/slideRight';
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
                            <h1>Learn from people who<span style={{ color: 'var(--text-secondary)' }}> build technology.</span></h1>
                            <p>We help people develop practical digital skills through live, educator-led classes, collaborative learning and guided projects.</p>
                        </SlideUp>
                    </div>
                    
                    <div className='globeWrapper'>
                        <img className='globe' src='/images/globe.png' alt="globe" />
                    </div>
                   
                </div>
            </header>
            <section className={styles.aboutSection1}>
                <div className={`container double ${styles.wwaCont}`}>
                    <div className={styles.wwaLeft}>
                        <h5>Who we are</h5>
                        <h2>A learning experience built around real people and real practice.</h2>
                        <div className={styles.whoWeAreTxt}>
                            <p>GMTDevs Academy is the educational arm of GMTDevs Global, a technology-first company that designs and builds digital products. The Academy brings that practical environment into technology education</p>
                            <p>Our classes are led by experienced GMTDevs developers who bring their knowledge of building websites, applications and digital products into the learning experience.</p>
                        </div>
                        <div className={styles.btnPack}>
                            <div className={styles.btnPills}>Live online classes</div>
                            <div className={styles.btnPills}>Small cohorts</div>
                            <div className={styles.btnPills}>Practical projects</div>
                        </div>
                    </div>
                    <div className={styles.wwaRight}>
                        <img src="/images/about.jpg" alt="man holding a laptop" />
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection2}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>Our approach</h5>
                        <h2>More than watching lessons. Be part of the learning.</h2>
                        <p style={{color: "#6d6a6a"}}>We believe students learn best when they can engage with an educator, practise what they learn and get support as they progress.</p>   
                    </div>
                    <div className={imStyles.rowPack}>
                        <div className={imStyles.row1}>
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UserRoundGroup />                                 
                                <p>Live, instructor-led learning</p>
                                <p style={{color: "#6d6a6a"}}>Attend live online classes, ask questions in real time and get explanations as concepts are introduced.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <CirclePile />                              
                                <p>Small learning cohorts</p>
                                <p style={{color: "#6d6a6a"}}>Learn in focused groups designed to create more room for participation, discussion and educator interaction.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <BriefcasePlus />                                
                                <p>Portfolio-focused</p>
                                <p style={{color: "#6d6a6a"}}>Apply concepts through exercises and projects that help turn knowledge into practical skills.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UserStar />                          
                                <p>Learning with practitioners</p>
                                <p style={{color: "#6d6a6a"}}>Learn from experienced developers within GMTDevs who understand the process of building digital products.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UsersRoundCollaboration />                               
                                <p>Collaborative learning</p>
                                <p style={{color: "#6d6a6a"}}>Exchange ideas, learn alongside peers and benefit from different approaches to solving problems.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <GraphHub />                             
                                <p>Progressive pathways</p>
                                <p style={{color: "#6d6a6a"}}>Build your skills through Beginner, Intermediate and Advanced learning pathways.</p>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.aboutSection1} ${styles.aboutSection2}`}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>How learning happens</h5>
                        <h2>A structured journey from learning to doing.</h2>
                        <p style={{color: "#6d6a6a"}}>We believe students learn best when they can engage with an educator, practise what they learn and get support as they progress.</p>   
                    </div>
                    <div className={styles.getThingsCardPack}>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>01.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Learn</h4>
                                <p>Understand core concepts through live lessons and educator guidance.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div  className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>02.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Build</h4>
                                <p>Work through guided exercises and practical assignments.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>03.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Practise</h4>
                                <p>Strengthen your understanding by applying concepts to projects.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>04.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Grow</h4>
                                <p>Develop confidence and continue progressing along your learning pathway.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnPack}>
                        <Link href="/courses" className='btn'>Explore courses <MoveRight size={20} /></Link>
                    </div>
                </div>
            </section>
            <section>
                <AcademySection />
            </section>
        </div>
    );
}
 
export default About;