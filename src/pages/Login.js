import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';

import { Container } from 'react-bootstrap';
import weed from '../templates/weed_for_login.png';
import Button from 'react-bootstrap/Button'

import React from 'react';

export default function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
      <NavbarTop />
      <NavBar2 />
      <Login />
      <Footer/>
    </div>
  );
}

function Login() {
    return (
      <Container style={{ maxWidth: '500px', marginTop: '50px', marginBottom: '500px'}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}>
        <img src={weed} alt="Weed Icon" style={{ width: '100px', height: '100px' }} />
      </div>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', marginTop: '25px', marginBottom: '25px' }}>
            <h2>Login to my account</h2>
            <h6>Enter your email and password</h6>
        </section>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Keep me signed in
            </label>
          </div>
            <Button variant="secondary" style={{ backgroundColor: 'black', color: '#f0f0f0', border: '1px solid #f0f0f0', fontSize: '14px' }}>
              Log in
            </Button>
        </form>

      </Container>
    );
  }
  
  
