import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function Text({ t }) { 
    return (
      <>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', marginTop: '25px' }}>
          <h2>{t('About Us')}</h2>
        </section>
        <section style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', marginTop: '10px', marginBottom: '50px', width: '100%' }}>
          <p style={{ width: '100%' }}>
            {t("Blissful Buds is an online dispensary based in Ontario, Canada. We specialize in providing premium cannabis products to customers who value quality and exceptional service.")}
          </p>
          <p style={{ width: '100%' }}>
            {t("At Blissful Buds, we believe in the healing properties of cannabis and its ability to enhance well-being. We curate a wide selection of high-quality strains, edibles, concentrates, and more to cater to the diverse needs and preferences of our customers.")}
          </p>
          <p style={{ width: '100%' }}>
            {t("Our team consists of passionate cannabis enthusiasts who are dedicated to delivering a seamless and enjoyable shopping experience. We prioritize customer satisfaction and strive to provide personalized recommendations, reliable information, and discreet packaging for every order.")}
          </p>
          <p style={{ width: '100%' }}>
            {t("As an online dispensary, we ensure a convenient and secure purchasing process. Our website is user-friendly, and we adhere to strict privacy and security measures to protect our customers' data.")}
          </p>
          <p style={{ width: '100%' }}>
            {t("Whether you're a seasoned cannabis connoisseur or new to the world of cannabis, Blissful Buds is here to assist you in finding the perfect products to suit your needs. We're committed to helping you discover the blissful benefits of cannabis and enhancing your overall well-being.")}
          </p>
  
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <Link to="/ressources">
              <Button variant="primary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px', marginRight: '10px' }}>
                {t('More Resources')}
              </Button>
            </Link>
            <Link to="/">
              <Button variant="secondary" style={{ backgroundColor: 'white', color: '#000', border: '1px solid #000', fontSize: '12px' }}>
                {t('Return Home')}
              </Button>
            </Link>
          </div>
        </section>
      </>
    );
  }

export default Text;
