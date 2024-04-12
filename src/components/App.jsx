import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Create a Home component
import BottleService from './pages/BottleService.jsx'; // Create a Home component


const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bottleService" element={<BottleService />} />
      </Routes>
    </Router>
  );
}

export default App;
