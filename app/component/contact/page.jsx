import styles from './contact.module.css';
import cStyle from '../../(pages)/courses/courses.module.css';
import Form from './form';

const Contact = () => {
    return ( 
        <div className={styles.container}>
            <div className={cStyle.double}>
                <div className={cStyle.headerContent}>
                    <div className={cStyle.headerTxt}>
                        <h5>Take the next step</h5>
                        <h2>Not sure which pathway is right for you?</h2>
                        <br /><br />
                        <p style={{color: "#6d6a6a"}}>Tell us what you want to learn and what experience you already have. The Academy team can help direct your enquiry to the appropriate pathway.</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Form />
                </div>
            </div>
        </div>
    );
}
 
export default Contact;