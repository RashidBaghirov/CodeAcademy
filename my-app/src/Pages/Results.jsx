import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AllHeader from '../components/AllHeader/AllHeader';
import Result from '../components/SearchResult/Result';
function Results() {
  return (
    <div className="App">
     <Header />
     <AllHeader />
     <Result />
      <Footer />
    </div>
  );
}

export default Results;


