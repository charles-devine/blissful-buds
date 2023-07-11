import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import React from 'react';

export default function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
          <NavbarTop />
      <NavBar2 />
          <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1687899370797-4b1cf4306bb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: '#fff', fontSize: '36px' }}>Ressources</h2>
      </div>

      <Resources />
      <Footer/>
    </div>
  );
}

function Resources() {
  return (
    <Container style={{ maxWidth: '500px', marginTop: '50px', marginBottom: '50px' }}>
      <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '25px', marginBottom: '0px' }}>
        <h6 style={{ fontSize: '14px' }}>Welcome to our cannabis consumption resource page. Here, you'll find valuable information, guides, and support to enhance your understanding and experience with cannabis.</h6>
      </section>

      <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '25px', marginBottom: '25px' }}>
        <h3>Talk about Cannabis</h3>
        <h6 style={{ fontSize: '12px' }}>The Government of Canada, including the province of Ontario, has implemented various resources and regulations regarding marijuana. These resources aim to provide education, guidance, and support for individuals and businesses related to the legal consumption, production, and distribution of marijuana.</h6>
        <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>Government of Canada - Cannabis Legalization and Regulation</h5>
        <h6 style={{ fontSize: '12px' }}>The official government website provides comprehensive information on cannabis laws, regulations, and guidelines for both recreational and medical use.</h6>
        <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>Ontario Cannabis Retail Corporation (OCRC)</h5>
        <h6 style={{ fontSize: '12px' }}>The OCRC is responsible for the wholesale distribution of recreational cannabis products to authorized retail stores across Ontario. It ensures the safe and regulated supply of cannabis throughout the province.</h6>
        <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>Health Canada - Cannabis for Medical Purposes</h5>
        <h6 style={{ fontSize: '12px' }}>Health Canada's website provides information for individuals who require cannabis for medical purposes. It covers topics such as accessing medical cannabis, regulations, and patient resources.</h6>
      </section>

      <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '25px', marginBottom: '25px' }}>
        <h3>Addiction Resources</h3>
        <h6 style={{ fontSize: '12px' }}>If you or someone you know is struggling with substance use, the following organizations and resources can connect you with help.</h6>
        <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>ConnexOntario</h5>
        <h6 style={{ fontSize: '12px' }}>ConnexOntario is a free, confidential helpline that provides information, support, and referral services for addiction, mental health, and problem gambling. They offer 24/7 assistance and can connect individuals in Ontario to a wide range of resources, including treatment programs, support groups, and counseling services.</h6>
        <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>Centre for Addiction and Mental Health (CAMH)</h5>
        <h6 style={{ fontSize: '12px' }}>CAMH provides valuable resources and support related to cannabis use, addiction, and mental health. They offer evidence-based information, treatment services, and prevention programs.</h6>
      </section>

      <Link to="/">
        <Button variant="secondary" style={{ backgroundColor: 'black', color: '#f0f0f0', border: '1px solid #f0f0f0', fontSize: '12px', textAlign: 'center' }}>
          Return Home
        </Button>
      </Link>
    </Container>
  );
}
  
  
  
  
