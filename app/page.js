'use client'
import styles from "./page.module.css";
import Navbar from "./component/navbar/page";
import { ArrowRightIcon, Brain, BriefcasePlus, CirclePile, GraduationCap, GraphHub, Helicopter, MonitorSmartphone, MoveRight, RefreshCcwDot, Sparkles, UserRoundGroup, UsersRoundCollaboration, UserStar } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import AcademySection from "./component/academySection/academy";
import SlideUp from "./component/animations/slideUp";
import SlideInRight from "./component/animations/slideRight";
import SlideInLeft from "./component/animations/slideLeft";



export default function Home() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0, distance = 18) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="navbarContainer">
          <Navbar />
        </div>
        <div className={styles.heroContent}>
          <motion.h1 {...entrance(0.05, 14)} className={styles.heroTitle}> Build skills that move you <span style={{color:'#CB8731'}}> forward.</span></motion.h1>
          <motion.p {...entrance(0.16, 14)}>Learn frontend development, backend development and UI/UX design through live online classes led by experienced practitioners. Ask questions, build projects and grow your skills in a small learning cohort.</motion.p>
          <motion.div {...entrance(0.26, 12)} className={styles.btnPack}>
            <Link href="/#learning" className='btnPills'>How learning works</Link>
            <Link href="/courses" className='btn'>Explore courses <MoveRight size={20} /></Link>
          </motion.div>
        </div>
        <div className={styles.heroContent2}>     
          <div className={`container ${styles.blankWhite}`}>
          </div>     
          <div className={`container ${styles.carouselContainer}`}>
            
          </div>          
        </div>
      </header>
      <main className={styles.main}>
        <section className={`container ${styles.section1}`}>
          
            <div className={styles.double}>
              <SlideInLeft delay={0.2} distance={30} duration={0.8}>
                <div>
                  <h3>Learn. Build. <span style={{color:'#CB8731'}}>Deploy. Start.</span> </h3>
                  <p>GMTDevs Academy is a practical, project-based learning environment designed to help aspiring developers build real front-end development skills through live instruction and hands-on projects. Instead of spending weeks watching tutorials & memorizing concepts, students learn by coding, solving problems, asking questions and building complete applications from start to finish. By the end of the programme, students leave with deployed projects, a professional GitHub profile and a portfolio they can use to pursue internships, freelance opportunities and development roles</p>
                </div>
              </SlideInLeft>
              <SlideInRight delay={0.35} distance={50}>
                <img src='/images/homePage.png' alt="GMTDevs Academy" />
              </SlideInRight>    
              
            </div>
          
          <SlideUp delay={0.2} duration={0.8} distance={30}> 
            <div className={styles.differentHeader}>
              <div className={styles.sectionHeaderCenter}>
                <h3>What makes us different?</h3>
                <div className='underline'></div>           
              </div>
            </div>
          </SlideUp>
          <SlideUp delay={0.8} duration={0.8} distance={30}> 
            <div className={styles.rowPack}>
              <div className={styles.row1}>
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <UserRoundGroup />                                 
                  <p>Live, instructor-led learning</p>
                  <p>Attend live online classes, ask questions in real time and get explanations as concepts are introduced.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <CirclePile />                              
                  <p>Small learning cohorts</p>
                  <p>Learn in focused groups designed to create more room for participation, discussion and educator interaction.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <BriefcasePlus />                                
                  <p>Portfolio-focused</p>
                  <p>Apply concepts through exercises and projects that help turn knowledge into practical skills.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <UserStar />                          
                  <p>Learning with practitioners</p>
                  <p>Learn from experienced developers within GMTDevs who understand the process of building digital products.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <UsersRoundCollaboration />                               
                  <p>Collaborative learning</p>
                  <p>Exchange ideas, learn alongside peers and benefit from different approaches to solving problems.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <GraphHub />                             
                  <p>Progressive pathways</p>
                  <p>Build your skills through Beginner, Intermediate and Advanced learning pathways.</p>
                </div>   
              </div>
            </div>
          </SlideUp>
        </section>
        <section >
          <SlideUp delay={0.2} duration={0.8} distance={30}> 
            <div className='container'>   
              <div className='headerContent'>
                <div className={` headerTxt  `}>
                  <h5>Explore your options</h5>
                  <h2>Choose a discipline. Build your capability.</h2>
                  <p style={{color: "#6d6a6a"}}>We believe students learn best when they can engage with an educator, practise what they learn and get support as they progress.</p>
                </div>
              </div>
              <div className={styles.coursesPack}>
                <div className={styles.courseCard}>
                  <p className={styles.cardTag}>Development</p>
                  <h4>Frontend Development</h4>
                  <p className={styles.cardTxt}>Learn to build the interfaces people use every day, from responsive web pages to interactive applications.</p>
                  <div className={styles.courseRow}>
                    <p>Beginner</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Build the foundations →</p>
                  </div>
                  <div className={styles.courseRow}>
                    <p>Intermediate</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Create interactive apps →</p>
                  </div>
                  <div className={styles.courseRow}>
                    <p>Advanced</p>
                    <p style={{color: "#CB8731", fontWeight: 600}} >{/* Develop */} production-ready skills →</p>
                  </div>
                  
                  <Link href="/courses#courseTabs" className={`btnPills ${styles.exploreBtn}`}>
                    Explore Frontend
                  </Link>
                </div>
                <div className={styles.courseCard}>
                  <p className={styles.cardTag}>Development</p>
                  <h4>Backend Development</h4>
                  <p className={styles.cardTxt}>Understand and build the systems that power digital products, including application logic, APIs and data.</p>
                  <div className={styles.courseRow}>
                    <p>Beginner</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Understand the foundations →</p>
                  </div>
                  <div className={styles.courseRow}>
                    <p>Intermediate</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Build APIs and database →</p>
                  </div>
                  <div className={styles.courseRow}>
                    <p>Advanced</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Design robust systems →</p>
                  </div>
                  <Link href="/courses#courseTabs" className={`btnPills ${styles.exploreBtn}`}>
                    Explore Backend
                  </Link>
                </div>
                <div className={styles.courseCard}>
                  <p className={styles.cardTag}>Design</p>
                  <h4>UI/UX Design</h4>
                  <p className={styles.cardTxt}>Learn to understand user needs and translate them into clear, useful and engaging digital experiences.</p>
                  <div className={styles.courseRow}>
                    <p>Beginner</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Learn design fundamentals →</p>
                  </div>
                  <div className={styles.courseRow}>
                    <p>Intermediate</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Design digital products →</p>
                  </div>
                  <div className={styles.courseRow}>
                    <p>Advanced</p>
                    <p style={{color: "#CB8731", fontWeight: 600}}>Build scalable design {/* systems */} →</p>
                  </div>
                  <Link href="/courses#courseTabs" className={`btnPills ${styles.exploreBtn}`}>
                    Explore UI/UX
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </section>
        <section className={styles.section3}>
          <div className='container'>
            <div className={styles.section3Cont}>
              <div className={styles.section3Left}>
                <SlideUp delay={0.2} duration={0.8} distance={30}> 
                  <div className={styles.bestChoiceCont}>
                    <div className='btn'><Sparkles /> Best choice</div>
                    <h4 style={{fontWeight:700}}>Complete Front-End Development Pathway</h4>
                    <h2>₦420,000</h2>
                    <p >24 weeks</p>
                    <p style={{lineHeight:1.5}}>Complete all three stages over 24 weeks and build your skills progressively from web fundamentals to advanced front-end development.</p>
                    <Link href='/courses#contact' className='btnPills'>Register today</Link>
                  </div>
                </SlideUp>
                <SlideUp delay={0.4} duration={0.8} distance={30}> 
                  <div className={styles.whoCont}>
                    <h3>Who is the academy for?</h3>
                    <p>GMTDevs Academy is for anyone looking to build or advance their skills in technology, whether you're just starting out, have some experience or are ready to deepen your expertise. With structured learning pathways, live instructor-led classes and practical projects, we provide an engaging environment to help you develop your skills and grow with confidence.</p>
                  </div>
                </SlideUp>
              </div>
              <div className={styles.section3Right}>
                <img src='/images/frontend.png' alt="GMTDevs Academy" />
              </div>
            </div>
          </div>
        </section>
        <section id="learning" className={styles.section4}>
          <div className='container'>
            <div className='headerContent'>
              <div className={styles.sectionHeaderCenter}>
                <h2>What the learning experience looks like</h2>
                <div className='underline'></div> 
              </div>
            </div>
            <div className={styles.rowPack}>
              <div className={styles.row1}>
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <Brain />                                
                  <p>Learn</p>
                  <p>Master core concepts and modern development tools through live, interactive instruction.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <CirclePile />                              
                  <p>Build</p>
                  <p>Apply each lesson immediately through guided hands-on development and project work.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <RefreshCcwDot />                                
                  <p>Practice</p>
                  <p>Reinforce what you've learned through assignments and individual practice outside class.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <Helicopter />                     
                  <p>Deploy</p>
                  <p>Take your completed projects beyond your computer and publish them live on the web.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <MonitorSmartphone />                               
                  <p>Showcase</p>
                  <p>Bring your projects together into a professional GitHub profile and portfolio.</p>
                </div>   
                <div className={`${styles.aboutCard1} ${styles.card}`}>   
                  <GraphHub />                             
                  <p>Continue</p>
                  <p>Use the skills and portfolio you've developed to pursue internships, freelance opportunities and technology careers.</p>
                </div>   
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <AcademySection />
        </section>
      </main>
    </div>
  );
}