import React, { useState } from 'react';
import "./Pages.css";

const ContactPage = () => {
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailTo = 'henry@henhen1227.com';
        const subject = encodeURIComponent('Inquiry from ' + userInput.name);
        const body = encodeURIComponent(`Name: ${userInput.name}\nEmail: ${userInput.email}\nMessage: ${userInput.message}`);
        window.location = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    };

    // Styles
    const styles = {
        form: {
            color: '#eee', // Bright green text, adjust as needed
            backgroundColor: '#2f2f2f', // Dark background
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '400px',
            width: '100%',
            margin: '0 auto',
        },
        input: {
            backgroundColor: '#222', // Slightly lighter dark background for inputs
            color: '#eee', // Bright green text
            border: '1px solid #eee', // Bright green border
            borderRadius: '4px',
            padding: '10px',
            marginBottom: '10px',
            width: '100%',
        },
        button: {
            backgroundColor: '#eee', // Bright green background for button
            color: '#000', // Dark text for contrast
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
        label: {
            marginBottom: '5px',
            display: 'block',
        },
    };

    return (
        <div className={"subpage"} style={{ color: '#fff', backgroundColor: '#0f0f0f', padding: '20px', textAlign: 'center' }}>
            <h2>Contact</h2>
            <p>Please reach out for help and suggestions at <b><a style={{ color: "#eee" }} href="mailto:henry@henhen1227.com">Henry@henhen1227.com</a></b> or fill out the form below.</p>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input type="text" id="name" name="name" value={userInput.name} onChange={handleChange} required style={styles.input} />
                </div>
                <div>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input type="email" id="email" name="email" value={userInput.email} onChange={handleChange} required style={styles.input} />
                </div>
                <div>
                    <label htmlFor="message" style={styles.label}>Message:</label>
                    <textarea id="message" name="message" rows="4" value={userInput.message} onChange={handleChange} required style={styles.input}></textarea>
                </div>
                <button type="submit" style={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default ContactPage;
