import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import FAQ from './pages/Faq';
import Ressources from './pages/Ressources';

import ResponsibleUse from './pages/ResponsibleUse'; 
import LegalUse from './pages/LegalUse'; 
import HealthEffects from './pages/HealthEffects';
import Youth from './pages/Youth'; 
import Contact from './pages/Contact'; 
import Medicinal from './pages/Medicinal'; 
import Cart from './pages/Cart';

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/faq" element={<FAQ />} />

      <Route path="/ressources" element={<Ressources />} />    
      <Route path="/responsibleuse" element={<ResponsibleUse />} />
      <Route path="/legaluse" element={<LegalUse />} />
      <Route path="/healtheffects" element={<HealthEffects />} />
      <Route path="/youth" element={<Youth />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/medicinal" element={<Medicinal />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}

export default App;