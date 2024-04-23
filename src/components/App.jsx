import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Create a Home component
import BottleService from './pages/BottleService.jsx';
import Event from './pages/Event.jsx'; 
import About from './pages/About.jsx'; 


const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bottleService" element={<BottleService />} />
        <Route path="/event" element={<Event/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
