import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./view/Home";
import Requests from "./view/Requests";
function App() {
  return (
    <div className="App">
     <Router>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home />} />
  <Route path="/request" element={<Requests />} />

</Routes>
</Router>
    </div>
  );
}

export default App;
