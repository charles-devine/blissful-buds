import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

export default function Footer() {
    const footerStyle = {
      backgroundColor: '#fff',
      padding: '20px',
      textAlign: 'center',
      marginTop: '20px',
    };
  
    const textStyles = {
      color: '#666',
      fontSize: '14px',
    };
  
    return (
      <footer style={footerStyle}>
        <p style={textStyles}>This is a simple footer.</p>
        <p style={textStyles}>© 2023 Blissful Buds. All rights reserved.</p>
      </footer>
    );
  }