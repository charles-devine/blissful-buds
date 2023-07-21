import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';
import Payment from '../components/Payment';
import MedicinalContainer from '../components/MedicinalContainer'; 

export default function Medicinal() {  
    return (
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        <NavbarTop />
        <NavBar2 />

        <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519038147911-84a336c20250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: '#fff', fontSize: '36px' }}>Medicinal Products</h2>
      </div>
        <MedicinalContainer />
        <Payment />
        <Footer />
      </div>
    );
  }
