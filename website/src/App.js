import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/training" element={<Training />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
