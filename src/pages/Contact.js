import React from 'react';
import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import Payment from '../components/Payment';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Contact() {
  const handleFormSubmit = () => {
    const confirmed = window.confirm("Are you sure you want to submit the form?");
    if (confirmed) {
      // Handle the form submission here
      // For now, we can just log a message to the console
      console.log("Form submitted!");
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <NavbarTop />
      <NavBar2 />
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', marginBottom: '20px' }}>
        <h3>Contact Us</h3>
        <p style={{ fontSize: '12px' }}>
          If you have any questions or inquiries, feel free to get in touch with us using the form below.
        </p>
        <Form>
          <Form.Group controlId="formName" style={{ marginBottom: '20px' }}>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail" style={{ marginBottom: '20px' }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage" style={{ marginBottom: '20px' }}>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <Button variant="primary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px', marginRight: '10px' }} onClick={handleFormSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <Payment />
      <Footer />
    </div>
  );
}
