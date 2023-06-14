import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import AllHeader from '../components/AllHeader/AllHeader'
import First from '../components/TeacherDetail/First/First';
import Second from '../components/TeacherDetail/Second/Second';


function Teaacher() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
        <First/>
        <Second/>

        <Footer />
        
  
      </div>
    );
  }
  
  export default Teaacher;