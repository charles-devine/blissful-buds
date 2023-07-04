import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

export default function NavBar2() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#featured">Featured</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#flower">Flower</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#vapes">Vapes</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#extracts">Extracts</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#concentrates">Concentrates</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#edibles">Edibles</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#beverages">Beverages</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#topicals">Topicals</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#learn">Medicinal</a>
              </li>
              <li className="nav-item" style={{ fontSize: '14px' }}>
                <a className="nav-link" href="#learn">Learn</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );}