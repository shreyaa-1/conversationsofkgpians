import React, { useState } from 'react';
import styles from '../css/form.module.css'; // Adjust path as per your project structure

function App() {
    const [name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [linkedin_url, setLinkedin] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            contact,
            linkedin_url
        };

        try {
            const response = await fetch('http://localhost:5000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Server response:', responseData);

            // Show success message
            setSuccessMessage('Successfully submitted! We will contact you shortly.');

            // Optionally reset the form fields after successful submission
            setFirstName('');
            setEmail('');
            setContact('');
            setLinkedin('');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleReset = () => {
        setFirstName('');
        setEmail('');
        setContact('');
        setLinkedin('');
        setSuccessMessage('');
    };

    return (
        <div className={styles.App}>
            <h1>Contact Us</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Name</label>
                    <input
                        type="text"
                        id="firstname"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter Name"
                        required
                    />
                  
                    <label htmlFor="email">Enter Email Id</label>
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    
                    <label htmlFor="contact">Contact</label>
                    <input
                        type="tel"
                        id="contact"
                        className={styles.input}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile number"
                    />
                   
                    <label htmlFor="linkedin">LinkedIn ID</label>
                    <input
                        type="text"
                        id="linkedin"
                        className={styles.input}
                        value={linkedin_url}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="Enter LinkedIn ID"
                        required
                    />
                    
                    <div>
                        <button type="button" className={styles.buttonReset} onClick={handleReset}>
                            Reset
                        </button>
                        <button className={styles.buttonSubmit} type="submit">Submit</button>
                    </div>
                </form>
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            </fieldset>
        </div>
    );
}

export default App;
