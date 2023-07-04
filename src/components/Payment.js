import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

import visa from '../templates/visa.png';
import mastercard from '../templates/mastercard.png';
import gpay from '../templates/googlepay.png';
import apay from '../templates/applepay.png';
import amex from '../templates/amex.png';

export default function PaymentContainer() {
  return (
    <div className="d-flex flex-column align-items-center border-top border-bottom py-3">
      <h5 className="text-center mb-3">Payment Methods</h5>
      <div className="d-flex justify-content-center">
        <img className="payment-icon mx-2" src={visa} alt="VISA" />
        <img className="payment-icon mx-2" src={mastercard} alt="Mastercard" />
        <img className="payment-icon mx-2" src={amex} alt="AMEX" />
        <img className="payment-icon mx-2" src={gpay} alt="googlepay" />
        <img className="payment-icon mx-2" src={apay} alt="applepay" />
      </div>
    </div>
  );
}
