import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';
import Payment from '../components/Payment';
import BgHeaderHome from '../components/BgHeaderHome';
import InfoBox from '../components/InfoBox';
import ImageContainer2 from '../components/ImageContainer2';
import ImageContainer from '../components/ImageContainer';

import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
      <NavbarTop />
      <NavBar2 />
      <BgHeaderHome/>
      <ImageContainer/>
      <ImageContainer2/>
      <InfoBox/>
      <Payment/>
      <Footer/>
    </div>
  );
}