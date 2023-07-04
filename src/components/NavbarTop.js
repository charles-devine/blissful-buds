import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

import { FaShoppingCart } from 'react-icons/fa';
import logo from '../templates/logo.PNG'; 

export default function NavbarTop() {
    return (
      <Navbar expand="lg" style={{ backgroundColor: '#fff' }}>
        <Container>
          <Navbar.Brand href="/" className="ms-0">
            <Image src={logo} alt="Logo" className="brand-image" style={{ width: '200px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Strains, brands and more"
                  style={{ width: '400px' }}
                  aria-label="Search"
                />
                <Button variant="outline-success" style={{ marginLeft: '10px' }}>Search</Button>
              </Form>
              <Nav.Link href="/products" style={{ marginLeft: '10px' }} >Products</Nav.Link>
              <Nav.Link href="/faq" style={{ marginLeft: '10px' }} >FAQ</Nav.Link>
              <Nav.Link href="/login" style={{ marginLeft: '10px' }} >Login</Nav.Link>
              <Button variant="outline-success" style={{ marginLeft: '10px' }}><FaShoppingCart /></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );}