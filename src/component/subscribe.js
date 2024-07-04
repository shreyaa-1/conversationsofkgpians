import React, { useState } from 'react';
import styles from '../css/subscribe.module.css';

function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://localhost:5001/subscribe';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        setMessage('Subscription successful! Thank you for subscribing.');
        setIsError(false);
        setEmail(''); // Clear the input field after successful subscription
      })
      .catch(error => {
        setMessage('Subscription failed. Please try again.');
        setIsError(true);
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.container} id="subscribe">
      <h1 className={styles.title}>Subscribe to our News letter.</h1>
     <p className={styles.subtitle}>Discover captivating insights and be a part of our exciting community!</p> 
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={styles.button}>SUBSCRIBE</button>
      </form>
      {message && (
        <p className={isError ? styles.errorText : styles.successText}>{message}</p>
      )}
      <p className={styles.footerText}>
        Be a part of our ever-growing community. 
        <a href="https://www.linkedin.com/company/conversations-of-kgpians/posts/?feedView=all" className={styles.link}>Follow us on LikedIn</a>
      </p>
    </div>
  );
}

export default SubscriptionForm;
