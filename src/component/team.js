// import React from 'react';
 
//  import i1 from '../images/i1.png'; // Adjust the path to your image file
//  import i2 from '../images/i2.png'; // Adjust the path to your image file
//  import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons



// function BasicExample() {
//     return (
//       <div>
//         <div className={styles.container}>
//           <h1 className={styles.title}>Our team</h1>
//           <p className={styles.subtitle}>Some quick example text to introduce the card collection and its purpose.</p>
//         </div>
//         <div className={styles.cardContainer}>
//           <div className={styles.card}>
//             <img className={styles.cardImage} src={i1} alt="Card" />
//             <div className={styles.cardBody}>
//               <div className={styles.cardTitle}>Card Title 1</div>
//               <div className={styles.cardText}> Geology and Geophysics</div>
//               <div className={styles.cardTextlast}>Patel Hall</div>
//               <FaLinkedin size={30} className={styles.icon} />
//               <FaFacebook size={30} className={styles.icon} />
//             </div>
//           </div>
//           <div className={styles.card}>
//             <img className={styles.cardImage} src={i1} alt="Card" />
//             <div className={styles.cardBody}>
//               <div className={styles.cardTitle}>Card Title 1</div>
//               <div className={styles.cardText}> Geology and Geophysics</div>
//               <div className={styles.cardTextlast}>Patel Hall</div>
//               <FaLinkedin size={30} className={styles.icon} />
//               <FaFacebook size={30} className={styles.icon} />
//             </div>
//           </div>
//           <div className={styles.card}>
//             <img className={styles.cardImage} src={i1} alt="Card" />
//             <div className={styles.cardBody}>
//               <div className={styles.cardTitle}>Card Title 1</div>
//               <div className={styles.cardText}> Geology and Geophysics</div>
//               <div className={styles.cardTextlast}>Patel Hall</div>
//               <FaLinkedin size={30} className={styles.icon} />
//               <FaFacebook size={30} className={styles.icon} />
//             </div>
//           </div>
//           <div className={styles.card}>
//             <img className={styles.cardImage} src={i1} alt="Card" />
//             <div className={styles.cardBody}>
//               <div className={styles.cardTitle}>Card Title 1</div>
//               <div className={styles.cardText}> Geology and Geophysics</div>
//               <div className={styles.cardTextlast}>Patel Hall</div>
//               <FaLinkedin size={30} className={styles.icon} />
//               <FaFacebook size={30} className={styles.icon} />
//             </div>
//           </div>
//           <div className={styles.card}>
//             <img className={styles.cardImage} src={i1} alt="Card" />
//             <div className={styles.cardBody}>
//               <div className={styles.cardTitle}>Card Title 1</div>
//               <div className={styles.cardText}> Geology and Geophysics</div>
//               <div className={styles.cardTextlast}>Patel Hall</div>
//               <FaLinkedin size={30} className={styles.icon} />
//               <FaFacebook size={30} className={styles.icon} />
//             </div>
//           </div>
//           <div className={styles.card}>
//             <img className={styles.cardImage} src={i1} alt="Card" />
//             <div className={styles.cardBody}>
//               <div className={styles.cardTitle}>Card Title 1</div>
//               <div className={styles.cardText}> Geology and Geophysics</div>
//               <div className={styles.cardTextlast}>Patel Hall</div>
//               <FaLinkedin size={30} className={styles.icon} />
//               <FaFacebook size={30} className={styles.icon} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default BasicExample;
  

//Carousel.jsx


import React from 'react';
import Slider from 'react-slick';
import '../css/carouse.css'; // Adjust the path to your carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../css/team.module.css'; // Adjust the path to your team module CSS
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; 
import i1 from '../images/i1.png'; // Adjust the path to your image file
import i2 from '../images/i2.png';
import dkd from '../teamimage/dkd.jpg';
import devansh from '../teamimage/devansh.jpeg';
import shivam from '../teamimage/Shivam_picture.png';
import akshara from '../teamimage/akshara.jpg';
import soujanya from '../teamimage/Soujanya.png';
import vishal from '../teamimage/Vishal.jpg';
import vivek from '../teamimage/vivek.jpg';
import shreya from '../teamimage/shreya.jpg';
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="full-width-carousel" id ="team">
            <h1 style={{ textAlign: 'center' }}>Our Team</h1>
                <Slider {...settings}>
                    <div className="full-width-slide">
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={dkd} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Devendra Kumar Dubey</div>
                                    <div className={styles.cardText}>Department of Geology and Geophysics</div>
                                    {/* <div className={styles.cardTextlast}>Patel Hall of Residence</div> */}
 <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABdaTz4BNvoZbVTK-wiMQEKeQ3xhOs_dXsA&keywords=devendra%20kumar%20dubey&origin=RICH_QUERY_SUGGESTION&position=1&searchId=752de363-abc1-44e8-bd7c-06bc1006eaa3&sid=naM&spellCorrectionEnabled=false">
                                    <FaLinkedin size={30} className={styles.icon} /> </a>
                                    {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={devansh} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Devansh Jain</div>
                                    <div className={styles.cardText}>Department of Mathematics</div>
                                    {/* <div className={styles.cardTextlast}>Patel Hall of Residence</div> */}
                                   <a href="https://www.linkedin.com/in/devansh-jain11/ "> <FaLinkedin size={30} className={styles.icon} /> </a>
                                    {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={shivam} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Shivam Yadav</div>
                                    <div className={styles.cardText}>
                                    Dept. of Electronics and Electrical Communication Engg.</div>
                                    {/* <div className={styles.cardTextlast}>Patel Hall of Residence</div> */}
                                  <a href="https://www.linkedin.com/in/shivamyadav1710 "> <FaLinkedin size={30} className={styles.icon} /> </a> 
                                    {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full-width-slide">
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={akshara} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Akshara Shukla</div>
                                    <div className={styles.cardText}> Department of Geology and Geophysics</div>
                                    {/* <div className={styles.cardTextlast}>Mother Teresa Hall of Residence</div> */}
                                    <a href="https://in.linkedin.com/in/akshara-shukla-95b806223?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile "><FaLinkedin size={30} className={styles.icon} /></a>
                                    {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={shreya} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Shreya Kumari</div>
                                    <div className={styles.cardText}>Department of Geology and Geophysics</div>
                                    {/* <div className={styles.cardTextlast}>Mother Teresa Hall of Residence</div> */}
                                  <a href="https://www.linkedin.com/in/shreya-kumari1/"> <FaLinkedin size={30} className={styles.icon} /> </a> 
                                  <br/>  {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={vivek} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Vivek Marwade</div>
                                    <div className={styles.cardText}>Department of Geology and Geophysics</div>
                                    {/* <div className={styles.cardTextlast}>Patel Hall of Residence</div> */}
                                  <a href="https://www.linkedin.com/in/vivek-marwade-a78791248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">  <FaLinkedin size={30} className={styles.icon} /> </a>
                                  {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full-width-slide">
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={soujanya} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Soujanya Nayak</div>
                                    <div className={styles.cardText}> Department of Biotechnology </div>
                                    {/* <div className={styles.cardTextlast}>Hall of Residence</div> */}
                                    <a href="https://www.linkedin.com/in/soujanyanayak/"><FaLinkedin size={30} className={styles.icon} /></a>
                                    <br/>  {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={vishal} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Vishal Devra</div>
                                    <div className={styles.cardText}>Department of Civil Engineering </div>
                                    {/* <div className={styles.cardTextlast}> Hall of Residence</div> */}
                                  <a href="https://www.linkedin.com/in/vishaldevra"> <FaLinkedin size={30} className={styles.icon} /> </a> 
                                  <br/> {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={vivek} alt="Card" />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>Tejas</div>
                                    <div className={styles.cardText}>Dept. of Electronics and Electrical Communication Engg.</div>
                                    {/* <div className={styles.cardTextlast}>Patel Hall of Residence</div> */}
                                    <br/>
                                  <a href="https://www.linkedin.com/in/vivek-marwade-a78791248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">  <FaLinkedin size={30} className={styles.icon} /> </a>
                                    {/* <FaFacebook size={30} className={styles.icon} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel;
