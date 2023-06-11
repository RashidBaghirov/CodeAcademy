import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllHeader from './components/AllHeader/AllHeader';
import FirstSection from './components/Abouts/FirstSection/FirstSection';
import SecondSection from './components/Abouts/SecondSection/SecondSection';
import Third from './components/Abouts/ThirdSection/Third';
import FourthSection from './components/Abouts/FourthSection/FourthSection';

function About() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <FirstSection />
       <SecondSection />
       <Third />
       <FourthSection />
        <Footer />
        
  
      </div>
    );
  }
  
  export default About;