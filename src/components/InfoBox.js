import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

import marijuana from '../templates/marijuana.png';
import mind from '../templates/mind.png'; 
import shop from '../templates/shop.png';

export default function InfoBox() {

    const containerStyle = {
      width: '1600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '50px'
    };
  
    const boxStyle = {
      width: '400px',
      height: '400px',
      border: '1px solid rgb(184, 232, 207)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const imageStyle = {
      width: '100px',
      height: '100px',
      marginBottom: '20px',
    };
  
    const titleStyle = {
      margin: '0px',
      marginLeft: '20px',
      marginRight: '20px',
      textAlign: 'center',
    };
  
    const textStyle = {
      margin: '0px',
      marginLeft: '20px',
      marginRight: '20px',
      textAlign: 'center',
    };
  
    const buttonStyle = {
      backgroundColor: 'transparent',
      color: '#000000',
      border: '1px solid #000000',
      fontSize: '12px',
      margin: '10px',
    };
  
    return (
      <div className="container" style={containerStyle}>
        <div className="box" style={{...boxStyle, backgroundColor: 'rgb(184, 232, 207)' }}>
          <img src={marijuana} alt="Image 1" style={imageStyle} />
          <h3 style={titleStyle}>Are you familiar with cannabis?</h3>
          <p style={textStyle}>Learn more about the plant, its species, and various strains.</p>
          <a href="/resources" className="btn btn-primary" style={buttonStyle}>Learn more</a>
        </div>
        <div className="box" style={{ ...boxStyle, backgroundColor: 'rgb(173, 214, 255)' }}>
          <img src={mind} alt="Image 2" style={imageStyle} />
          <h3 style={titleStyle}>What you need to know</h3>
          <p style={textStyle}>Here is what you need to know before buying or using cannabis.</p>
          <a href="/faq" className="btn btn-primary" style={buttonStyle}>Learn more</a>
        </div>
        <div className="box" style={{...boxStyle, backgroundColor: 'rgb(184, 232, 207)' }}>
          <img src={shop} alt="Image 3" style={imageStyle} />
          <h3 style={titleStyle}>Find a store near you</h3>
          <a href="#" className="btn btn-primary" style={buttonStyle}>Search</a>
        </div>
      </div>
    );
  }
