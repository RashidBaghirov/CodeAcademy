import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import AllHeader from './components/AllHeader/AllHeader'
import AllPartnyor from './components/AllPartnyor/AllPartnyor'




function Akademi() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <AllPartnyor />

        <Footer />
        
  
      </div>
    );
  }
  
  export default Akademi;