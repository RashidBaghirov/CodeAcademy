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
import Teaacher from './Pages/Teaacher';
import Practice from './Pages/Practice';
import Results from './Pages/Results';

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
  <Route path="/graduantabout/:id" element={<GraduantAbout />} />
  <Route path="/profession/:id" element={<Profession />} />
  <Route path="/professiondetail/:id" element={<ProfessionDetail />} />
  <Route path="/teacher/:id" element={<Teaacher />} />
  <Route path="/practice/:id" element={<Practice />} />
  <Route path="/practice/:id" element={<Practice />} />
  <Route path="/result" element={<Results />} />







</Routes>
</Router>
    </div>
  );
}

export default App;

