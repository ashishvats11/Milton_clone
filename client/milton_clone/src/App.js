import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import LastCTA from './Components/LastCTA';

import Features from './Components/Features';
import Grid from './Components/Grid';
import Testimonials from './Components/Testimonials';
import Accordion from './Components/Accordions/Accordion';
import PricingTable from './Components/PricingTale';
// import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <Grid/>
      <Testimonials/>
      <PricingTable/>
      <Accordion/>
      <LastCTA/>
      <Footer/>
    </div>
  );
}

export default App;
