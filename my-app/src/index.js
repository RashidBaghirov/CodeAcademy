import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Akademi from './Akademi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/akademi" element={<Akademi />} />
</Routes>
</Router>
);

reportWebVitals();
