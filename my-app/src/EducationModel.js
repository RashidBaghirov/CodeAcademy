import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import AllHeader from './components/AllHeader/AllHeader'
import First from './components/Educations/FirstSection/First';
import Second from './components/Educations/SecondSection/Second';
import Third from './components/Educations/ThirdSection/Third';


function EducationModel() {
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
  
  export default EducationModel;