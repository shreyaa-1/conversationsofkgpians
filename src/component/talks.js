import React from 'react';
import styles from '../css/talk.module.css';
import i1 from '../images/i1.png'; // Adjust the path to your image file
import i2 from '../images/i2.png'; // Adjust the path to your image file
import {  FaYoutube } from 'react-icons/fa'; // Import icons from react-icons
import atala from '../talkimages/atala.png';
import partha from '../talkimages/partha.jpg';

// import partha from '../talkimages/partha.jpg';

import ramayanan from '../talkimages/ramayanan.jpg';
import samarth from '../talkimages/samarth.jpg';
import sudipta from '../talkimages/sudipta.jpg';
import manish from '../talkimages/manish.jpg';



function Talk() {
    return (
      <div id="talks">
        <br/>
        <br/>
        {/* <div className={styles.container} id="talks">
          <h1 className={styles.title}> Upcoming Talks</h1>
          <p className={styles.subtitle}>Some quick example text to introduce the card collection and its purpose.</p>
        </div>
        <br/>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img className={styles.cardImage} src={ramayanan} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Card Title 1</div>
              <div className={styles.cardText}> Geology and Geophysics</div>
              <div className={styles.cardTextlast}>Patel Hall</div>
              <button className={styles.contactButton}>Ask questions</button>

            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={i1} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Card Title 1</div>
              <div className={styles.cardText}> Geology and Geophysics</div>
              <div className={styles.cardTextlast}>Patel Hall</div>
              <button className={styles.contactButton}>Ask questions</button>
             
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={i1} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Card Title 1</div>
              <div className={styles.cardText}> Geology and Geophysics</div>
              <div className={styles.cardTextlast}>Patel Hall</div>
              <button className={styles.contactButton}>Ask questions</button>
            </div>
          </div>
          
        </div> */}
<br/>
        <div className={styles.container} id="talks">
          <h1 className={styles.title}> Previous Talks</h1>
          <p className={styles.subtitle}>Check out our previous talks filled with fascinating insights and discoveries!
            
          </p>
        </div>
        <div className={styles.cardContainer}>
        <div className={styles.card}>
            <img className={styles.cardImage} src={manish} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Manish Kumar</div>
              <div className={styles.cardText}> Global Strategy Head at Siemens Energy
 
              </div>
              <div className={styles.cardText}>Adjunct Professor at University of North Carolina
              </div>
              <div className={styles.cardText}>Harvard MBA
              </div>
              {/* <div className={styles.cardTextlast}>Patel Hall</div> */}
            <a href="https://www.youtube.com/watch?v=I54FQcXRj4I&t=2537s">  <FaYoutube size={45} className={styles.icon} /></a>
             
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={ramayanan} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Dr V Narayanan</div>
              <div className={styles.cardText}> Director of ISRO (LPSC)
              </div>
              <div className={styles.cardText}>Worked on Chandrayaan 2 and Chandrayaan 3 </div>
             
              {/* <div className={styles.cardTextlast}>Patel Hall</div> */}
             <a href="https://youtu.be/B-CLKgaeCS0?si=pZvG9ar1ufrmbT8p"> <FaYoutube size={45} className={styles.icon} /></a>

            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={atala} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Atal Agarwal</div>
              <div className={styles.cardText}> Founder OpenSphere </div>
              <div className={styles.cardText}>Immigrant Activist in USA </div>
              <div className={styles.cardText}>Iron Man Athlete</div>
              {/* <div className={styles.cardTextlast}>Patel Hall</div> */}
           <a href="https://youtu.be/M69rJ4ovqeM?si=ILP8AAMKxbO9eohF"> <FaYoutube size={45} className={styles.icon} /></a>  
             
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={partha} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Partha Ghosh</div>
              <div className={styles.cardText}>Senior Partner at McKinsey & Co. (Former)              </div>
              <div className={styles.cardText}>Visionary Behind Partha Ghosh Academy of Leadership, IIT KGP
</div>
              {/* <div className={styles.cardText}>Iron Man Athlete</div> */}
              {/* <div className={styles.cardTextlast}>Patel Hall</div> */}
              <a href="https://youtu.be/Nn2hJJzL5AQ?si=c7yEN3jk0uxBWe-4"><FaYoutube size={45} className={styles.icon} /></a>
             
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={sudipta} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Sudipta Biswas</div>
              <div className={styles.cardText}> Co-founder of Floworks (Y Combinator accelerated)
              </div>
              <div className={styles.cardText}>Risk Analyst at Goldman Sachs (Former)
              </div>
              <div className={styles.cardText}>Silver Medalist at IIT Kharagpur
              </div>
              {/* <div className={styles.cardTextlast}>Patel Hall</div> */}
            <a href="https://youtu.be/T7EY0HbfMQU?si=mnHeh9kV2P69aYhz">  <FaYoutube size={45} className={styles.icon} /></a>
             
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImage} src={samarth} alt="Card" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Samarth Mahajan</div>
              <div className={styles.cardText}> National Film Award Winner 
              </div>
              <div className={styles.cardText}>Director of “The Unreserved”
              </div>
              <div className={styles.cardText}>Director of “Borderlands”
              </div>
              {/* <div className={styles.cardTextlast}>Patel Hall</div> */}
            <a href="https://youtu.be/A_KNCwBHRTQ?si=a0ZHrh-g5oDjmhmu">  <FaYoutube size={45} className={styles.icon} /></a>
             
            </div>
          </div>
          
        </div>




      </div>
    );
  }
  
  export default Talk;
  