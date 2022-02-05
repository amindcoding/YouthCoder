import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './routes/Contact';

import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';

function App() {
  return (
    <div>
      <Route>
        <Router exact path="/" element={<Home />} />
        <Router exact path="/pricing" element={<Pricing />} />
        <Router exact path="/training" element={<Training />} />
        <Router exact path="/contact" element={<Contact />} />
      </Route>
    </div>
  );
}

export default App;
