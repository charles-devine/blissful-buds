import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';
import Payment from '../components/Payment';

import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
      <NavbarTop />
      <NavBar2 />
      <Payment/>
      <Footer/>
    </div>
  );
}
