import React, { useState, useEffect } from 'react';
import Typing from 'react-typing-effect';
import styles from '../css/home.module.css';
import i1 from '../images/i1.png';
import i2 from '../images/i2.png';
import i3 from '../images/i3.png';
import i4 from '../images/i4.png';
import i5 from '../images/i5.png';
import i6 from '../images/i6.png';
import i7 from '../images/i7.png';
import i8 from '../images/i8.png';
import { Link } from 'react-router-dom';
import Team from './team';

const imageSets = [
  [i1, i2, i3, i4],
  [i5, i6, i7, i8]
];

function Home() {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % imageSets.length);
    }, 3000); // Change image set every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftheadd}>
        
          <Typing
            text={['Conversations of KGPians']}
            speed={40}
            eraseSpeed={0}
            typingDelay={500}
            cursorRenderer={cursor => <span className={styles.typingCursor}>{cursor}</span>}
            className={styles.h1main}
          />
          <h2 className={styles.h2title}>From Hall Gossips,</h2>
          <h2 className={styles.h2title}>To Global Forums.</h2>
        </div>
        <p className={styles.headd}>
        Welcome to Conversations of KGPians, an IIT Kharagpur College Society!
<br/> 

 In this dynamic space, we celebrate the triumphs, challenges, and lessons <br/> learned  by our alumni. Through their experiences and wisdom,
 we aim <br/> to  guide and inspire the next generation of leaders, innovators,
 and <br/> changemakerscoming   from IIT Kharagpur.<br/>
        </p>
        <p> &nbsp; &nbsp; If you are an alumni, please connect to us-:</p>
        <Link to="/form">
    <button className={styles.contactButton}>Connect with us</button>
  </Link>
      </div>
      <div className={styles.right}>
      <img src={imageSets[currentSet][0]} alt="Logo 1" className={styles.logoImage2} />
        <img src={imageSets[currentSet][1]} alt="Logo 2" className={styles.logoImage} />
        <br />
        <img src={imageSets[currentSet][2]} alt="Logo 3" className={styles.logoImage2} />
        <img src={imageSets[currentSet][3]} alt="Logo 4" className={styles.logoImage} />
         
      </div>
      
    </div>
  );
}

export default Home;
