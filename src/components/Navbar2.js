import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item" style={{ fontSize: '14px' }}>
              <DropdownButton variant="light" title="Featured" id="dropdown-featured" menuAlign="left" menuVariant="light">
                <Link to="/products" className="dropdown-item">New Products</Link>
                <Link to="/products" className="dropdown-item">Back in Stock</Link>
                <Link to="/products" className="dropdown-item">High-CBD</Link>
                <Link to="/products" className="dropdown-item">High-THC</Link>
                <Link to="/products" className="dropdown-item">Balanced Products</Link>
                <Link to="/products" className="dropdown-item">Minor Cannabinoids</Link>
                <Link to="/products" className="dropdown-item">Grown in BC</Link>
                <Link to="/products" className="dropdown-item">In Store Exclusives</Link>
              </DropdownButton>
            </li>
            <li className="nav-item" style={{ fontSize: '14px' }}>
              <DropdownButton variant="light" title="Products" id="dropdown-flower" menuAlign="left" menuVariant="light">
                <Link to="/products" className="dropdown-item">Dried Flower</Link>
                <Link to="/products" className="dropdown-item">Edibles</Link>
                <Link to="/products" className="dropdown-item">Pre-Rolls</Link>
                <Link to="/products" className="dropdown-item">Vapes</Link>
                <Link to="/products" className="dropdown-item">Extracts</Link>
                <Link to="/products" className="dropdown-item">Concentrates</Link>
                <Link to="/products" className="dropdown-item">Beverages</Link>
                <Link to="/products" className="dropdown-item">Topicals</Link>
              </DropdownButton>
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
            <li className="nav-item" style={{ fontSize: '14px' }}>
              <DropdownButton variant="light" title="More" id="dropdown-more" menuAlign="left" menuVariant="light">
                <Link to="/products" className="dropdown-item">Cannabis Basics</Link>
                <Link to="/products" className="dropdown-item">Cannabis How Tos</Link>
                <Link to="/products" className="dropdown-item">How It's Made</Link>
                <Link to="/products" className="dropdown-item">Shopping for Legal Cannabis</Link>
                <Link to="/products" className="dropdown-item">About us</Link>
              </DropdownButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
