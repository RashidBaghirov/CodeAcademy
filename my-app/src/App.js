import React from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider'
import EducationsArea from './components/EducationsArea/EducationsArea'
import Why from './components/Why/Why'


import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
      <Slider />
      <EducationsArea />
      <Why />

    </div>
  );
}

export default App;


