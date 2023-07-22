import React from 'react';
import { useTranslation } from 'react-i18next';
import icon from '../templates/china.jpg';

function LanguageButton() {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div style={{ textAlign: 'right', padding: '10px' }}>
      <button onClick={handleLanguageChange} style={{ width: '50px', height: '30px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
        <img src={icon} alt="Language Toggle Icon" style={{ width: '50px', height: '30px' }} />
      </button>
    </div>
  );
}

export default LanguageButton;
