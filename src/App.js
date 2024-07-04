import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './component/navbar';
// import Home from './component/home';
// import Team from './component/team';
// import About from './component/about-us';
// import Talks from './component/talks';
// import Subscribe from './component/subscribe';
// import Form from './component/form';
// import { Element } from 'react-scroll';

import Main from './component/mainn';
import Form from './component/form';
import Navbar from './component/navbar';
function App() {
  return (
    <Router>
         <Navbar />
        <Routes>
   
     {/* <Element name="home"><Home /></Element>
      <Element name="talks"><Talks /></Element>
      <Element name="about"><About /></Element>
      <Element name="team"><Team /></Element>
      <Element name="subscribe"><Subscribe /></Element>  */}
    
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
