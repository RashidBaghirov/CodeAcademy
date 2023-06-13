import React from 'react';
import { AppProvider } from './context/AppContext';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();