import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import AllHeader from '../components/AllHeader/AllHeader'
import First from '../components/Karyera/FirstSection/First';
import Second from '../components/Karyera/SecondSection/Second';
import Third from '../components/Karyera/ThirdSection/Third';



function Karyera() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <First />
       <Second />
       <Third />


        <Footer />
        
  
      </div>
    );
  }
  
  export default Karyera;