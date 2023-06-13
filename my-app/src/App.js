import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Akademi from './Pages/Akademi';
import Corporativ from './Pages/Corporativ';
import Contact from './Pages/Contact';
import Request from './Pages/Request';
import Karyera from './Pages/Karyera';
import About from './Pages/About';
import EducationModel from './Pages/EducationModel';
import GraduantsPage from './Pages/GraduantsPage';
import GraduantAbout from './Pages/GraduantAbout';
import Profession from './Pages/Profession';
import ProfessionDetail from './Pages/ProfessionDetail';


function App() {
  return (
    <div className="App">
   
   <Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/akademi" element={<Akademi />} />
  <Route path="/corporativ" element={<Corporativ />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/request" element={<Request />} />
  <Route path="/karyera" element={<Karyera />} />
  <Route path="/about" element={<About />} />
  <Route path="/education" element={<EducationModel />} />
  <Route path="/graduant" element={<GraduantsPage />} />
  <Route path="/graduantabout" element={<GraduantAbout />} />
  <Route path="/profession" element={<Profession />} />
  <Route path="/professiondetail" element={<ProfessionDetail />} />


</Routes>
</Router>
    </div>
  );
}

export default App;

