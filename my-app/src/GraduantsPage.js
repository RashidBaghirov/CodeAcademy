import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import AllHeader from './components/AllHeader/AllHeader'
import First from './components/GraduantPage/First/First';
import Second from './components/GraduantPage/Second/Second';
import Third from './components/GraduantPage/Third/Third';



function GraduantsPage() {
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
  
  export default GraduantsPage;