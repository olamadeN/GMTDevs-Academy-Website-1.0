'use client'
import { useState } from 'react';
import styles from '../contact/contact.module.css';
import Select from 'react-select'
const PartnershipForm = () => {
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [selectedInterest, setSelectedInterest] = useState(null);
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sending) return;
        setSending(true);
        setFeedback(null);

        const form = event.currentTarget;
        const data = new FormData(form);
        const payload = {
            orgName: String(data.get("orgName") || "").trim(),
            yourName: String(data.get("fullName") || "").trim(),
            email: String(data.get("email") || "").trim(),
            orgType: selectedOrg?.value || "",
            interest: selectedInterest?.value || "",
            details: String(data.get("goals") || "").trim(),
        };

        try {
            const response = await fetch("/api/contactPartner", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Unable to send your message. Please try again.");
            setFeedback({ type: result.acknowledged ? "success" : "warning", message: result.message });
            form.reset();
            setSelectedOrg(null);
            setSelectedInterest(null);
        } catch (error) {
            setFeedback({ type: "error", message: error.message || "Unable to send your message. Please try again." });
        } finally {
            setSending(false);
        }
    };

    const orgType = [
        { value: 'School / Educational institution', label: 'School / Educational institution' },
        { value: 'NGO / Development organisation', label: 'NGO / Development organisation' },
        { value: 'Business / Corporate', label: 'Business / Corporate' },
        { value: 'Government / Public institution', label: 'Government / Public institution' },
        { value: 'Other', label: 'Other' },
    ]
    const interest = [
        { value: 'Digital skills acquisition', label: 'Digital skills acquisition' },
        { value: 'Technology training programme', label: 'Technology training programme' },
        { value: 'Workshops / Bootcamps', label: 'Workshops / Bootcamps' },
        { value: 'Workforce development', label: 'Workforce development' },
    ]
    return ( 
        <form onSubmit={handleSubmit}>
            <div className={styles.double}>
                <input type="text" name='orgName' placeholder='Organisation name'/>
                <input type="text" name='fullName' placeholder='Full name'/>
            </div>
            <div className={styles.double}>
                <input type="email" name="email" id="email" placeholder='you@example.com' />
                <Select styles={{control: (baseStyles, state) => ({ ...baseStyles, border: state.isFocused ? "#f4eee5" : "none", fontSize:"16px"})}} placeholder="Select organisation type" inputId="contact-organisation" className={styles.select} classNamePrefix="select" options={orgType} value={selectedOrg} onChange={setSelectedOrg} isDisabled={sending} isClearable />
            </div>
            <Select styles={{control: (baseStyles, state) => ({ ...baseStyles, border: state.isFocused ? "#f4eee5" : "none", fontSize:"16px"})}} placeholder="Select area of interest" inputId="contact-interest" className={styles.select} classNamePrefix="select" options={interest} value={selectedInterest} onChange={setSelectedInterest} isDisabled={sending} isClearable />
            <textarea name="goals" id="" placeholder='Describe your target audience, goals and any requirements...'></textarea>
            <button type='submit' className={styles.btn}>Send partnership enquiry →</button>
            {feedback && <p role="status" aria-live="polite" className={`${styles.feedback} ${styles[feedback.type]}`}>
                {feedback.message}
            </p>}
        </form>
     );
}
 
export default PartnershipForm;