import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import AllHeader from './components/AllHeader/AllHeader'
import ContactFirstSection from './components/Contacts/ContactFirstSection/ContactFirstSection';



function Contact() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <ContactFirstSection />

        <Footer />
        
  
      </div>
    );
  }
  
  export default Contact;