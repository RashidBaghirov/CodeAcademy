import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import AllHeader from '../components/AllHeader/AllHeader'
import ContactFirstSection from '../components/Contacts/ContactFirstSection/ContactFirstSection';
import SecondSection from '../components/Contacts/SecondSection/SecondSection';
import ThirdSection from '../components/Contacts/ThirdSection/ThirdSection';




function Contact() {
    return (
      <div className="App">
       <Header />
       <AllHeader />
       <ContactFirstSection />
      <SecondSection />
      <ThirdSection />
        <Footer />
        
  
      </div>
    );
  }
  
  export default Contact;