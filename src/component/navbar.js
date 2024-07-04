// import React, { useState } from 'react';
// import styles from '../css/navbar.module.css';
// import logo from '../images/logo.png'; // Adjust the path to your image file
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// function Navbar() {
//   const [isActive, setIsActive] = useState(false);
//   const location = useLocation();

//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleLinkClick = (id) => {
//     if (location.pathname === '/') {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     } else {
//       window.location.href = `/#${id}`;
//     }
//     setIsActive(false); // Close the menu after clicking on a link
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className={`${styles.navbar}`}>
//           <RouterLink to="/" className={styles.logo} onClick={scrollToTop}>
//             <img src={logo} alt="Logo" className={styles.logoImage} />
//           </RouterLink>
//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
//             <li>
//               <RouterLink to="/" className={`${styles.navLink}`} onClick={() => handleLinkClick('home')}>
//                 Home
//               </RouterLink>
//             </li>
//             <li>
//               <ScrollLink to="talks" smooth={true} duration={500} className={`${styles.navLink}`} onClick={() => handleLinkClick('talks')}>
//                 Talks
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="subscribe" smooth={true} duration={500} className={`${styles.navLink}`} onClick={() => handleLinkClick('subscribe')}>
//                 Newsletter
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="about" smooth={true} duration={500} className={`${styles.navLink}`} onClick={() => handleLinkClick('about')}>
//                 About
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="team" smooth={true} duration={500} className={`${styles.navLink}`} onClick={() => handleLinkClick('team')}>
//                 Team
//               </ScrollLink>
//             </li>
//           </ul>

//           <div
//             className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
//             onClick={toggleActiveClass}
//           >
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Navbar;





import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../css/navbar.module.css';
import logo from '../images/logo.png'; // Adjust the path to your image file

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setIsActive(false); // Close the menu after clicking on a link
  };

  return (
    <header id="navigation">
      <nav className={styles.navbar}>
        <RouterLink to="/" className={styles.logo} onClick={scrollToTop}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </RouterLink>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li>
            <RouterLink
              to="/"
              className={styles.navLink}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="talks"
              smooth={true}
              duration={500}
              className={styles.navLink}
              onClick={() => handleLinkClick('talks')}
            >
              Talks
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="subscribe"
              smooth={true}
              duration={500}
              className={styles.navLink}
              onClick={() => handleLinkClick('subscribe')}
            >
              Newsletter
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={styles.navLink}
              onClick={() => handleLinkClick('about')}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="team"
              smooth={true}
              duration={500}
              className={styles.navLink}
              onClick={() => handleLinkClick('team')}
            >
              Team
            </ScrollLink>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
          onClick={toggleActiveClass}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
