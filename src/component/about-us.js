import React from 'react';
import styles from '../css/about-us.module.css';
import i1 from '../images/i1.png'; // Adjust the path to your image file
import i2 from '../images/i2.png'; // Adjust the path to your image file
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons



function BasicExample() {
    return (
      <div id="about">
        <br/><br/>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>Welcome to Conversations of KGPians, an IIT Kharagpur College Society website!

Our platform shines a spotlight on the journeys of IIT Kharagpur alumni. Here, you'll discover their remarkable achievements and gain valuable insights and advice for aspiring leaders, inventors, and creators.
Dive into a treasure trove of career guidance, entrepreneurial tips, and inspiring narratives designed to empower you to achieve your goals. Whether you're looking for practical advice or a dose of motivation, our community is here to support and inspire you every step of the way.
</p>
        </div>
        <br/>
       <br/>
      </div>
    );
  }
  
  export default BasicExample;
  