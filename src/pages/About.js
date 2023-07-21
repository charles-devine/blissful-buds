import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';
import Payment from '../components/Payment';
import Text from '../components/Text'; 

import { useTranslation } from 'react-i18next';
import LanguageButton from '../components/LanguageButton'; // Update the path accordingly

export default function About() {
    const { t } = useTranslation();
  
    return (
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        <NavbarTop />
        <NavBar2 />
        <LanguageButton />
        <Text t={t} /> {/* Pass the t function as a prop */}
        <Payment />
        <Footer />
      </div>
    );
  }
