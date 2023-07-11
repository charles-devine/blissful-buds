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
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1670793631505-98e872b02418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: '#000', fontSize: '36px' }}>Responsible Use</h2>
      </div>

      <Resources1 />
      <Resources2 />
      <InfoBox />
      <Resources3 />
      <Resources4 />
      <Resources5 />
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
              src="https://images.unsplash.com/photo-1457573557536-6b4b6ca9a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>Comparing Consumption Methods</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
                This handy illustration offers a side-by-side look at the differences between the four consumption methods.
              </Card.Text>
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
              <Card.Title style={{ fontSize: '18px' }}>All About Inhalation</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
                Inhalation is one of the most common forms of consumption. Here’s what you need to know about the effects and potential risks of using a joint, vaporizer, vape, pipe, bong or dab rig.
              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
            <Card.Img
              src="https://images.unsplash.com/photo-1589844428386-06bba62381a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with your image URL
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
              src="https://images.unsplash.com/photo-1560999448-1288f5c62468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>All About Ingestion</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Ingesting cannabis — by consuming an edible, beverage or capsule, for instance — affects your body differently than other consumption methods. Learn how before you consume. 
              </Card.Text>
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
              <Card.Title style={{ fontSize: '18px' }}>How Cannabis Consumption Affects Drivers</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Consuming cannabis can significantly impair your ability to safely operate a motor vehicle. Driving under the influence of cannabis is also a criminal offence with serious consequences. Here’s what you need to know to keep yourself, and others, safe.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
            <Card.Img
              src="https://images.unsplash.com/photo-1517773015382-e8a6414bbe50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
          </div>
        </Card>
      </Container>
    );
  }

  function Resources5() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Img
              src="https://images.unsplash.com/photo-1457573294499-86ac96b336ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>The Importance of Safe Cannabis Storage</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Using cannabis responsibly also means protecting those around you — especially those at risk of accidental consumption, such as children and pets. Here’s what you need to know about cannabis storage. 
              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
          </div>
        </Card>
      </Container>
    );
  }



