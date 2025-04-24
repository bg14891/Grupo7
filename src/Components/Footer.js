import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t('footer.home'), href: '#' },
    { label: t('footer.features'), href: '#' },
    { label: t('footer.pricing'), href: '#' },
    { label: t('footer.faqs'), href: '#' },
    { label: t('footer.about'), href: '#' },
  ];

  const socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com' },
    { icon: 'instagram', url: 'https://www.instagram.com' },
    { icon: 'github', url: 'https://www.github.com' },
    { icon: 'question-circle', url: '#' },
    
  ];

  return (
    <div className="footer-wrapper">
      <div className="container main-container">
        <div className="row justify-content-center">
          {socialLinks.map((social, idx) => (
            <div className="col-md-3 col-sm-6" key={idx}>
              <div className="footer-section text-center">
                <h5>{t('footer.section')}</h5>
                <ul className="list-unstyled">
                  {footerLinks.map((link, i) => (
                    <li key={i}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
                <div className="social-icon">
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <i className={`bi bi-${social.icon}`}></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

