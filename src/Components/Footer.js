import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

function Footer() {
    return (
      <div className="footer-wrapper">
        <div className="container main-container">
          <div className="row justify-content-center">
            {/* Columna 1 */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-section text-center">
                <h5>Section</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">About</a></li>
                </ul>
                <div className="social-icon">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Columna 2 */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-section text-center">
                <h5>Section</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">About</a></li>
                </ul>
                <div className="social-icon">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Columna 3 */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-section text-center">
                <h5>Section</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">About</a></li>
                </ul>
                <div className="social-icon">
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Columna 4 */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-section text-center">
                <h5>Section</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">About</a></li>
                </ul>
                <div className="social-icon">
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;