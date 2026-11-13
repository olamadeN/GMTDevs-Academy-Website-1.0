'use client'
import { useState } from 'react';
import styles from './contact.module.css';
import Select from 'react-select'
const Form = () => {
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
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
            yourName: String(data.get("fullName") || "").trim(),
            email: String(data.get("email") || "").trim(),
            discipline: selectedDiscipline?.value || "",
            level: selectedLevel?.value || "",
            details: String(data.get("goals") || "").trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Unable to send your message. Please try again.");
            setFeedback({ type: result.acknowledged ? "success" : "warning", message: result.message });
            form.reset();
            setSelectedDiscipline(null);
            setSelectedLevel(null);
        } catch (error) {
            setFeedback({ type: "error", message: error.message || "Unable to send your message. Please try again." });
        } finally {
            setSending(false);
        }
    };

    const discipline = [
        { value: 'Frontend Development', label: 'Frontend Development' },
        { value: 'Backend Development', label: 'Backend Development' },
        { value: 'UI/UX Design', label: 'UI/UX Design' }
    ]
    const level = [
        { value: 'Beginner', label: 'Beginner' },
        { value: 'Intermediate', label: 'Intermediate' },
        { value: 'Advanced', label: 'Advanced' },
        { value: 'Not sure yet', label: 'Not sure yet' },
    ]
    return ( 
        <form onSubmit={handleSubmit}>
            <div className={styles.double}>
                <input type="text" name='fullName' placeholder='Full name'/>
                <input type="email" name="email" id="email" placeholder='you@example.com' />
            </div>
            <div className={styles.double}>
                <Select styles={{control: (baseStyles, state) => ({ ...baseStyles, border: state.isFocused ? "#f4eee5" : "none", })}} placeholder="Choose a discipline" inputId="contact-discipline" instanceId="contact-discipline" className={styles.select} options={discipline} value={selectedDiscipline} classNamePrefix="select" onChange={setSelectedDiscipline} isDisabled={sending} isClearable />
                <Select styles={{control: (baseStyles, state) => ({ ...baseStyles, border: state.isFocused ? "#f4eee5" : "none", })}} placeholder="Select a pathway" inputId="contact-pathway" instanceId="contact-pathway" className={styles.select} options={level} value={selectedLevel} classNamePrefix="select" onChange={setSelectedLevel} isDisabled={sending} isClearable />
            </div>
            <textarea name="goals" id="" placeholder='Share a little about your goals...'></textarea>
            <button type='submit' disabled={sending} className={styles.btn}>
                {sending ? "Sending..." : "Send course enquiry →"}
                
            </button>
            {feedback && <p role="status" aria-live="polite" className={`${styles.feedback} ${styles[feedback.type]}`}>
                {feedback.message}
            </p>}
        </form>
     );
}
 
export default Form;