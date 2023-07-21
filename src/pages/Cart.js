import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import Payment from '../components/Payment';

import { Link } from 'react-router-dom';


export default function Cart() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <NavbarTop />
      <NavBar2 />
      <CartPage />
      <Payment />
      <Footer />
    </div>
  );
}

const CartPage = () => {
  // Sample cart items data
  const cartItems = [
    { id: 1, name: 'Craft Blueberry', price: 15.99, quantity: 2 },
    { id: 2, name: 'Dancehall Pre-Rolls', price: 4.15, quantity: 1 },
    { id: 3, name: 'CBZ - CBN + CBD Softgel', price: 9.95, quantity: 3 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Row>
        <Col md={8}>
          <h3>Shopping Cart</h3>
          <Table striped bordered hover style={{ background: 'transparent' }}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to="/products">
              <Button variant="secondary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px' }}>
                Continue Shopping
              </Button>
            </Link>
        </Col>
        <Col md={4} style={{ borderLeft: '1px solid #ccc', paddingLeft: '30px' }}>
          <h4>Cart Totals</h4>
          <Table striped bordered style={{ background: 'transparent' }}>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${totalPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>$4.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${(totalPrice+4).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Link to="/">
              <Button variant="secondary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px' }}>
                Proceed to Checkout
              </Button>
            </Link>
        </Col>
      </Row>
    </Container>
  );
};
