import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import Button from 'react-bootstrap/Button'; 

import { Link } from 'react-router-dom';

export default function BgHeaderHome() {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1586275019508-fc4863eb2fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)',
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div
        className="background-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(10px)', 
          backgroundColor: 'rgba(144, 238, 144, 0.5)', 
        }}
      >
        <div
          className="text-container"
          style={{
            position: 'absolute',
            top: '40%',
            left: '15%',
            transform: 'translateY(-50%)',
            color: '#fff'
          }}
        >
          <h1>Welcome to Our Shop!</h1>
          <h2></h2>
          <p>Explore our wide selection of premium flower and delicious edibles.</p>
          <div>
            <Link to="/products">
            <Button variant="primary" style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', fontSize: '12px', margin: '10px'}}>
              View products
            </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', fontSize: '12px'}}>
                More about us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
