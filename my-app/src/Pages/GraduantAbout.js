import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import AllHeader from '../components/AllHeader/AllHeader'
import First from '../components/GraduantAbout/FirstSection/First';
import Second from '../components/GraduantAbout/SecondSection/Second';
import Third from '../components/GraduantAbout/ThirdSection/Third';
import Fourth from '../components/GraduantAbout/Fourth/Fourth';


function GraduantAbout() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
        <First />
        <Second />
        <Third />
        <Fourth />

        <Footer />

      </div>
    );
  }
  
  export default GraduantAbout;