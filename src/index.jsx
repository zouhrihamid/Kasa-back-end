import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import AccommodationDetail from './Pages/AccommodationDetai/AccommodationDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Router>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
                        <Route path="*" element={<Error />} />
                  </Routes>
                  <Footer />
            </Router>
      </React.StrictMode>
);
