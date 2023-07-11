import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import Payment from '../components/Payment';

import { Button, Card, Container } from 'react-bootstrap';

import React from 'react';
import InfoBox from '../components/InfoBox';


export default function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <NavbarTop />
      <NavBar2 />
      <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1688498465380-74092922165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: '#000', fontSize: '36px' }}>Health Effects</h2>
      </div>

      <Resources1 />
      <Resources2 />
      <Resources3 />
      <Resources4 />
      <Payment />
      <Footer />
    </div>
  );
}

  function Resources1() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Img
              src="https://images.unsplash.com/photo-1597618844713-809cb7ae1fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1579&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>Cannabis Consumption and Cannabis Use Disorder</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Cannabis use exists on a spectrum, ranging from abstinence to cannabis use disorder (or addiction). If you choose to consume cannabis, it’s important to understand the spectrum and the risks at each point.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
          </div>
        </Card>
      </Container>
    );
  }

  function Resources2() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>Cannabis, Pregnancy and Breastfeeding</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              While the effects of cannabis use during pregnancy and breastfeeding are not yet completely understood, no amount of cannabis has been proven safe. Here’s what the current clinical evidence says about the risks.</Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
            <Card.Img
              src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
          </div>
        </Card>
      </Container>
    );
  }

  function Resources3() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Img
              src="https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>Cannabis Use and Mental Health</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Clinical research has established a complex connection between regular cannabis use and mental health outcomes. Here’s what researchers know so far.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
          </div>
        </Card>
      </Container>
    );
  }

  function Resources4() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>How Cannabis Affects the Developing Brain</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Regular cannabis use during adolescence may negatively impact brain development. Learn how THC may affect the developing brain and the risks to adolescents.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
            <Card.Img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
          </div>
        </Card>
      </Container>
    );
  }

