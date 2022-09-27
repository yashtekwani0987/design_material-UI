import './App.css';
import Billing from './components/Billing';
import Business from './components/Business';
import Carddeal from './components/Carddeal';
import Client from './components/Client';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import style from './Style'

function App() {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`w-full ${style.boxWidth}`}>
                <Navbar/>
          </div>
      </div>
      <div className={`bg-black  ${style.flexStart}`}>
        <div className={`${style.boxWidth}`} >
          <Main/>
        </div>
        </div>

      <div className={`bg-primary ${style.paddingX}  ${style.flexStart}`}>
        <div className={`${style.boxWidth}`} >
          <Stats/>
          <Business/>
          <Billing/>
          <Carddeal/>
          <Testimonial/>
          <Client/>
          <CTA/>
          <Footer/>
        </div>
        </div>
    </div>
  );
}

export default App;
