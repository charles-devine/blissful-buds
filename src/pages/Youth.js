import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';

import { Container } from 'react-bootstrap';

import React from 'react';

export default function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
    
      <NavbarTop />
      <NavBar2 />
      <Resources />
      <Footer/>
    </div>
  );
}

function Resources() {
    return (
      <Container style={{ maxWidth: '500px', marginTop: '50px', marginBottom: '100px' }}>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '25px', marginBottom: '25px' }}>
          <h2>Ressources</h2>
          <h6 style={{ fontSize: '10px' }}>Welcome to our cannabis consumption resource page. Here, you'll find valuable information, guides, and support to enhance your understanding and experience with cannabis.</h6>
        </section>
  
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <img src='https://images.unsplash.com/photo-1629823660231-232a7cf5c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80' style={{ height: '300px', width: '400px' }} />
        </div>

  
      </Container>
    );
  }
  
  
  
  
