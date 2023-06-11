import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap'
import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Akademi from './Akademi';
import Corporativ from './Corporativ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Request from './Request';
import Karyera from './Karyera';
import About from './About';
import EducationModel from './EducationModel';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/akademi" element={<Akademi />} />
  <Route path="/corporativ" element={<Corporativ />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/request" element={<Request />} />
  <Route path="/karyera" element={<Karyera />} />
  <Route path="/about" element={<About />} />
  <Route path="/education" element={<EducationModel />} />





</Routes>
</Router>
);

reportWebVitals();
