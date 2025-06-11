import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProjectPage from './landing_page/project/ProjectPage';
import ContactPage from './landing_page/contact/ContactPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
       <Route path='/' element={<HomePage />} /> 
      <Route path='/about' element={<AboutPage />} />
      <Route path='/project' element={<ProjectPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

