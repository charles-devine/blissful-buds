import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import DropdownButton from 'react-bootstrap/DropdownButton';

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/products" className="nav-link" style={{ color: 'black' }}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: 'black' }}>Our Story</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: 'black' }}>Contact</Link>
            </li>
            <li className="nav-item" style={{ fontSize: '14px' }}>
              <DropdownButton variant="light" title="Learn" id="dropdown-learn" menuAlign="left" menuVariant="light">
                <Link to="/responsibleuse" className="dropdown-item">Responsible Use</Link>
                <Link to="/legaluse" className="dropdown-item">Legal Use</Link>
                <Link to="/healtheffects" className="dropdown-item">Health Effects</Link>
                <Link to="/youth" className="dropdown-item">Cannabis and Youth</Link>
                <Link to="/ressources" className="dropdown-item">Additional Resources</Link>
              </DropdownButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
