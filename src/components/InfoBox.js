import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

import marijuana from '../templates/marijuana.png';
import mind from '../templates/mind.png'; 
import shop from '../templates/shop.png';

import { Link } from 'react-router-dom';

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
          <Link to="/ressources" className="btn btn-primary" style={buttonStyle}>Learn more</Link>
        </div>
        <div className="box" style={{ ...boxStyle, backgroundColor: 'rgb(173, 214, 255)' }}>
          <img src={mind} alt="Image 2" style={imageStyle} />
          <h3 style={titleStyle}>What you need to know</h3>
          <p style={textStyle}>Here is what you need to know before buying or using cannabis.</p>
          <Link to="/faq" className="btn btn-primary" style={buttonStyle}>Learn more</Link>
        </div>
        <div className="box" style={{...boxStyle, backgroundColor: 'rgb(184, 232, 207)' }}>
          <img src={shop} alt="Image 3" style={imageStyle} />
          <h3 style={titleStyle}>Find a store near you</h3>
          <Link to="https://www.google.com/maps/place/BlissfulBuds/@43.9593618,-79.9916661,8z/data=!3m1!4b1!4m6!3m5!1s0x89d51dcf3a0200f7:0x853ccbed349f4a49!8m2!3d43.9648425!4d-78.8705844!16s%2Fg%2F11t51dg_wq?entry=ttu" className="btn btn-primary" style={buttonStyle}>Learn more</Link>
        </div>
      </div>
    );
  }
