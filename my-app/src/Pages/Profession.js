import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AllHeader from '../components/AllHeader/AllHeader';
import First from '../components/Professions/First/First';
import Second from '../components/Professions/Second/Second';
import Third from '../components/Professions/Third/Third';


function Profession() {
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
  
  export default Profession;