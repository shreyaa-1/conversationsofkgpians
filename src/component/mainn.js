
import Home from './home';
import Team from './team';
import Talk from './talks';
import Subscribe from './subscribe';
import About from './about-us';

const Content = () => {
  return (
    <div id="mainContent">
      <Home />
      <Talk/>
     
      <About/>
      <Subscribe/>
      <Team/>
    </div>
  );
};
export default Content;