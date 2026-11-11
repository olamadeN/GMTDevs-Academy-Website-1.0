
import Navbar from '@/app/component/navbar/page';
export { metadata } from "./metadata";
import styles from '../about-us/about.module.css';
import cStyle from '../courses/courses.module.css';
import imStyles from '../../page.module.css';
import { BriefcasePlus, CirclePile, GraphHub, Grid3x3, HeartHandshake, MoveRight, School, UserRoundGroup, UsersRoundCollaboration, UserStar } from 'lucide-react';
import AcademySection from '@/app/component/academySection/academy';
import Link from 'next/link';
import SlideUp from '@/app/component/animations/slideUp';
import SlideInRight from '@/app/component/animations/slideRight';
import Contact from '@/app/component/contact/page';
import PartnershipContact from '@/app/component/Partnershipcontact/page';
const Partnership = () => {
    return ( 
        <div className={styles.aboutCont}>
            <header className='header'>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className='container headerContent'>   
                    <div className='headerTxt'>
                        <SlideUp delay={0.2} duration={0.8} distance={30}> 
                            <h1>Let's build digital skills<span style={{ color: 'var(--text-secondary)' }}> together.</span></h1>
                            <p>We welcome opportunities to work with organisations, schools, NGOs and institutions to make practical technology education more accessible.</p>
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
                        <h5>Working together</h5>
                        <h2>Turning skills development goals into practical learning experiences.</h2>
                        <div className={styles.whoWeAreTxt}>
                            <p>GMTDevs Academy is open to collaborating with institutions and organisations interested in technology education, digital skills acquisition and capacity development.</p>
                            <p>Whether you are looking to introduce young people to technology, strengthen digital capabilities or organise a structured training programme, we welcome a conversation about your objectives.</p>
                        </div>
                    </div>
                    <div className={styles.wwaRight}>
                        <img src="/images/partnership.png" alt="man holding a laptop" />
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection2}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>Who we work with</h5>
                        <h2>Partnerships across learning communities.</h2>
                        <p style={{color: "#6d6a6a"}}>We are interested in working with partners who share an interest in developing practical digital skills.</p>   
                    </div>
                    <div className={imStyles.rowPack}>
                        <div className={imStyles.row1}>
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <School color='#CB8731'/>                                 
                                <p>Schools and educational institutions</p>
                                <p style={{color: "#6d6a6a"}}>Collaborate on technology education, supplementary skills programmes, workshops and practical learning opportunities for students.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <HeartHandshake color='#CB8731'/>                           
                                <p>NGOs and development organisations</p>
                                <p style={{color: "#6d6a6a"}}>Explore digital skills acquisition and technology training initiatives that support youth development and community capacity building.</p>
                            </div>   
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <Grid3x3 color='#CB8731'/>                            
                                <p>Businesses and organisations</p>
                                <p style={{color: "#6d6a6a"}}>Discuss workforce development, digital upskilling and tailored technology training aligned with organisational needs.</p>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection2}>
                <div className='container'>
                    <div className={cStyle.double}>
                        <div className={cStyle.headerContent}>
                            <div className={cStyle.headerTxt}>
                                <h5>Areas of collaboration</h5>
                                <h2>What we can work on together.</h2>
                                <br /><br />
                                <p style={{color: "#6d6a6a"}}>Partnership activities can be shaped around the needs, audience and objectives of each organisation.</p>
                            </div>
                        </div>
                        <div className={cStyle.cardGrid}>
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UserRoundGroup color='#CB8731'/>                              
                                <p>Digital skills acquisition</p>
                                <p style={{color: "#6d6a6a"}}>Structured learning opportunities that introduce participants to practical technology skills and digital disciplines.</p>
                            </div> 
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <CirclePile color='#CB8731' />                                 
                                <p>Technology training programmes</p>
                                <p style={{color: "#6d6a6a"}}>Live, educator-led training programmes designed around agreed learning objectives and participant needs.</p>
                            </div> 
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <BriefcasePlus color='#CB8731' />                                
                                <p>Workshops and bootcamps</p>
                                <p style={{color: "#6d6a6a"}}>Focused learning activities that give participants opportunities to explore concepts and practise new skills.</p>
                            </div> 
                            <div className={`${imStyles.aboutCard1} ${imStyles.card}`}>   
                                <UserStar color='#CB8731' />                                     
                                <p>Capacity development</p>
                                <p style={{color: "#6d6a6a"}}>Collaborative initiatives to strengthen digital capabilities among students, teams or community groups.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.aboutSection1} ${styles.aboutSection2}`}>
                <div className='container'>
                    <div className={styles.getThingHeader}>
                        <h5>How we approach partnerships</h5>
                        <h2>A collaborative process from conversation to delivery.</h2>
                    </div>
                    <div className={styles.getThingsCardPack}>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>01.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Understand</h4>
                                <p>Discuss your audience, objectives, needs and desired outcomes.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div  className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>02.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Design</h4>
                                <p>Shape a suitable training approach, learning pathway and delivery plan.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>03.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Deliver</h4>
                                <p>Coordinate educators and deliver the agreed learning activities.</p>
                            </div>
                        </div>
                        <div className={styles.getThingsCard}>
                            <div className={styles.cardNumber}>
                                <p style={{color:"#D4953D"}}>04.</p>
                            </div>
                            <div style={{backgroundColor:"#FAFAFA"}} className={styles.cardContent}>
                                <h4>Review</h4>
                                <p>Discuss feedback, learning progress and opportunities for continued collaboration.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnPack}>
                        <Link href="/courses" className='btn'>Explore courses <MoveRight size={20} /></Link>
                    </div>
                </div>
            </section>
            <section>
                <div id='contact' className='container'>
                    <PartnershipContact />
                </div>
            </section>
        </div>
    );
}
 
export default Partnership;