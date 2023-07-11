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
            <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1688498465316-8949b65b47d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '250px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <h2 style={{ color: '#fff', fontSize: '36px' }}>Legal Use</h2>
        </div>

        <Resources6 />
        <Resources7 />
        <Resources8 />
        <Resources9 />
        <Payment />
        <Footer />
    </div>
  );
}




  function Resources9() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Img
              src="https://images.unsplash.com/photo-1591754060004-f91c95f5cf05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>The Importance of Trusting Your Source</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Buying legal cannabis means never having to second-guess where your product comes from. Discover what else you get when you buy legal.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
          </div>
        </Card>
      </Container>
    );
  }

  function Resources6() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>Legal vs. Illegal Sources: How to Tell the Difference</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Not sure whether a cannabis website or bricks-and-mortar store is legally authorized? Here’s how to distinguish between legal and illegal sources.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
            <Card.Img
              src="https://images.unsplash.com/photo-1630526974594-501cb00c10bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
          </div>
        </Card>
      </Container>
    );
  }

  function Resources7() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Img
              src="https://cdn.shopify.com/s/files/1/2636/1928/files/How-to-Read-a-Cannabis-Product-Label.jpg?v=1653938493" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>A Guide to Legal Product Labels</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Understanding legal cannabis product labels can help you make informed choices. Here’s a breakdown of what information you’ll find on a legal label and what it means.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
          </div>
        </Card>
      </Container>
    );
  }

  function Resources8() {
    return (
      <Container style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '50px', border: 'none' }}>
        <Card border="0"> {/* Set border to '0' */}
          <div style={{ display: 'flex' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '40px' }}>
              <Card.Title style={{ fontSize: '18px' }}>What’s Legal for Ontarians</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
              Consuming cannabis can significantly impair your ability to safely operate a motor vehicle. Driving under the influence of cannabis is also a criminal offence with serious consequences. Here’s what you need to know to keep yourself, and others, safe.              </Card.Text>
            <Button variant="secondary" size="sm" style={{ width: 'fit-content', backgroundColor: '#fff', color: '#000', border: '1px solid #000', fontSize: '12px' }}>Learn More</Button>
            </Card.Body>
            <Card.Img
              src="https://macleans.ca/wp-content/uploads/2015/06/08907413.jpg" // Replace with your image URL
              alt="Image"
              style={{ width: '350px', height: 'auto' }}
            />
          </div>
        </Card>
      </Container>
    );
  }

