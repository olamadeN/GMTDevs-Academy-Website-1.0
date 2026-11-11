import { MoveRight } from 'lucide-react';
import styles from './academy.module.css';
import Link from 'next/link';
const AcademySection = () => {
    
    
    return(
        <div className={styles.container}>
            <div className={`container ${styles.contInner}`}>
                <div className={styles.textPack}>
                    <div>
                        <h5>PARTNERSHIP</h5>
                        <h3>For organisations and institutions</h3>
                        <div className='underline'></div>
                    </div>
                    <div>
                        <h2>Let's make practical technology learning more accessible.</h2>
                        <p>Our academy is a hands-on learning space for people who want to get into tech and actually understand how things work. We are interested in working with partners who share an interest in developing practical digital skills. We welcome conversations with schools, NGOs and organisations interested in digital skills acquisition, technology training and capacity development</p>   
                        
                    </div>
                    <Link href="/partnership" className='btnPills'>Explore partnership<MoveRight size={20} /></Link>
                </div>
            </div>
            
        </div>
    )
}

export default AcademySection