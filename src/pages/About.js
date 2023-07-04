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
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', marginTop: '25px' }}>
            <h2>About Us</h2>
        </section>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '10px', marginBottom: '50px', width: '100%' }}>
            <p style={{ width: '100%' }}>
                Blissful Buds is an online dispensary based in Ontario, Canada. We specialize in providing premium cannabis products to customers who value quality and exceptional service.
            </p>
            <p style={{ width: '100%' }}>
                At Blissful Buds, we believe in the healing properties of cannabis and its ability to enhance well-being. We curate a wide selection of high-quality strains, edibles, concentrates, and more to cater to the diverse needs and preferences of our customers.
            </p>
            <p style={{ width: '100%' }}>
                Our team consists of passionate cannabis enthusiasts who are dedicated to delivering a seamless and enjoyable shopping experience. We prioritize customer satisfaction and strive to provide personalized recommendations, reliable information, and discreet packaging for every order.
            </p>
            <p style={{ width: '100%' }}>
                As an online dispensary, we ensure a convenient and secure purchasing process. Our website is user-friendly, and we adhere to strict privacy and security measures to protect our customers' data.
            </p>
            <p style={{ width: '100%' }}>
                Whether you're a seasoned cannabis connoisseur or new to the world of cannabis, Blissful Buds is here to assist you in finding the perfect products to suit your needs. We're committed to helping you discover the blissful benefits of cannabis and enhancing your overall well-being.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <Link to="/resources">
                    <Button variant="primary" style={{ backgroundColor: 'black', color: '#f0f0f0', border: '1px solid #f0f0f0', fontSize: '12px', marginRight: '10px' }}>
                        More Resources
                    </Button>
                </Link>
                <Link to="/">
                    <Button variant="secondary" style={{ backgroundColor: 'black', color: '#f0f0f0', border: '1px solid #f0f0f0', fontSize: '12px' }}>
                        Return Home
                    </Button>
                </Link>
            </div>
        </section>
        </>
    );       
}