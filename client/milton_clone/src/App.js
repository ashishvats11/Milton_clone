import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import LastCTA from './Components/LastCTA';
import FAQs from './Components/FAQs';
import PricingTable from './Components/PricingTale';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <PricingTable/> */}
      <FAQs/>
      <LastCTA/>
      <Footer/>
    </div>
  );
}

export default App;
