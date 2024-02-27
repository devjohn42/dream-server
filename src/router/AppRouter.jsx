import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Pricing from '../Pages/Pricing';
import Contact from '../Pages/Contact';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path='/*'element={<Error/>}/> */}
    </Routes>
  );
};
