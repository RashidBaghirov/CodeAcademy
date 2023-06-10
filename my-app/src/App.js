import React from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider'
import EducationsArea from './components/EducationsArea/EducationsArea'
import Why from './components/Why/Why'
import ClipBoard from './components/ClipBoard/ClipBoard'
import StudentsCM from './components/StudentsCM/StudentsCM'
import Portnyor from './components/Portnyor/Portnyor'
import Graduate from './components/Graduate/Graduate'
import Footer from './components/Footer/Footer'








import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
      <Slider />
      <EducationsArea />
      <Why />
      <ClipBoard />
      <StudentsCM />
      <Portnyor />
      <Graduate />
      <Footer />
      

    </div>
  );
}

export default App;


