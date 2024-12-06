import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './components/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Router>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/a-propos" element={<About />} /> {/* Assurez-vous de conserver ce format */}
                        <Route path="*" element={<Error />} />
                  </Routes>
            </Router>
      </React.StrictMode>
);
