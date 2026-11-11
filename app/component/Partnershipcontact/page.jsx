import styles from './contact.module.css';
import Mstyles from '../contact/contact.module.css';

import cStyle from '../../(pages)/courses/courses.module.css';
import Form from './form';
import PartnershipForm from './form';

const PartnershipContact = () => {
    return ( 
        <div className={Mstyles.container}>
            <div className={cStyle.double}>
                <div className={cStyle.headerContent}>
                    <div className={cStyle.headerTxt}>
                        <h5>Let's talk</h5>
                        <h2>Have a programme or partnership idea?</h2>
                        <br /><br />
                        <p style={{color: "#6d6a6a"}}>Tell us about your organisation and what you would like to achieve. Our team will review your enquiry and get in touch to discuss possible next steps.</p>
                        <div className={styles.double}>
                            <div className="pill">Schools</div>
                            <div className="pill">NGOs</div>
                            <div className="pill">Businesses</div>
                            <div className="pill">Institutions</div>
                        </div>
                    </div>
                </div>
                <div className={Mstyles.right}>
                    <PartnershipForm />
                </div>
            </div>
        </div>
    );
}
 
export default PartnershipContact;