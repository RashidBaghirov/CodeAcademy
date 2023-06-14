import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import AllHeader from '../components/AllHeader/AllHeader'
import FirstSection from '../components/Corporativs/FirstSection/FirstSection';
import SecondSection from '../components/Corporativs/SecondSection/SecondSection';
import ThirdSection from '../components/Corporativs/ThirdSection/ThirdSection';
import FourthSection from '../components/Corporativs/FourthSection/FourthSection';
import FifthSection from '../components/Corporativs/FifthSection/FifthSection';
import SixthSection from '../components/Corporativs/SixthSection/SixthSection';
import SeventhSection from '../components/Corporativs/SeventhSection/SeventhSection';

function Corporativ() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <FirstSection />
       <SecondSection />
       <ThirdSection />
       <FourthSection />
       <FifthSection />
       <SixthSection />
       <SeventhSection />
        <Footer />
        
  
      </div>
    );
  }
  
  export default Corporativ;