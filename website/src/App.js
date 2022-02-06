import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Training from './routes/Training';
import Articel from './components/Articel';
import Signup from './routes/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/articel" element={<Articel />} />
        <Route exact path="/training" element={<Training />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
