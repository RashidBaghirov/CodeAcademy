import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import AllHeader from './components/AllHeader/AllHeader'
import FirstSection from './components/Requests/FirstSection/FirstSection';


function Request() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <FirstSection />

        <Footer />
        
  
      </div>
    );
  }
  
  export default Request;