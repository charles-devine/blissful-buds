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
      <Text />
      <Payment/>
      <Footer/>
    </div>
  );
}

function Text() { 
    return (
      <>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', marginTop: '25px', marginBottom: '20px' }}>
          <h2>Frequently Asked Questions</h2>
        </section>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '10px', marginBottom: '50px', width: '100%' }}>
          <p style={{ width: '100%' }}>
            <strong>Q: Blissful Buds is an online dispensary based in Ontario, Canada. What products do you offer?</strong>
          </p>
          <p style={{ width: '100%' }}>
            <strong>A: </strong>Blissful Buds specializes in providing premium cannabis products, including a wide selection of strains, edibles, concentrates, and more.
          </p>
          <p style={{ width: '100%' }}>
            <strong>Q: What sets Blissful Buds apart from other online dispensaries?</strong>
          </p>
          <p style={{ width: '100%' }}>
            <strong>A: </strong>At Blissful Buds, we prioritize quality, exceptional service, and customer satisfaction. Our team of passionate cannabis enthusiasts is dedicated to delivering a seamless and enjoyable shopping experience.
          </p>
          <p style={{ width: '100%' }}>
            <strong>Q: Is the purchasing process convenient and secure?</strong>
          </p>
          <p style={{ width: '100%' }}>
            <strong>A: </strong>Yes, we ensure a convenient and secure purchasing process. Our website is user-friendly, and we adhere to strict privacy and security measures to protect our customers' data.
          </p>
          <p style={{ width: '100%' }}>
            <strong>Q: How can Blissful Buds assist customers in finding the right products?</strong>
          </p>
          <p style={{ width: '100%' }}>
            <strong>A: </strong>Our knowledgeable team is here to help customers find the perfect products to suit their needs. We provide personalized recommendations and reliable information to enhance the overall shopping experience.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <Link to="/about">
              <Button variant="primary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px', marginRight: '10px' }}>
                About us
              </Button>
            </Link>
            <Link to="/">
              <Button variant="secondary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px' }}>
                Return Home
              </Button>
            </Link>
          </div>
        </section>
      </>
    );       
  }
  