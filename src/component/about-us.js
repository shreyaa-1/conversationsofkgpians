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
          <p className={styles.subtitle}>
          Our platform highlights the extraordinary journeys of IIT Kharagpur alumni, showcasing their remarkable achievements and providing valuable insights for aspiring leaders, inventors, and creators. We host insightful online and offline sessions with KGPians on a range of topics, fostering knowledge exchange and inspiration. Additionally, our newsletter addresses global issues across various domains, ensuring our community stays informed and engaged.
</p>
        </div>
        <br/>
       <br/>
      </div>
    );
  }
  
  export default BasicExample;
  