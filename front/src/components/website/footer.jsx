import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // For social media icons
import "../website/footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo and Info */}
        <div className="footer-info">
          <h3 className="footer-logo">HealthCare</h3>
          <p className="footer-description">
            We provide the best doctors to ensure your health and wellbeing. Your health is our priority.
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Footer Social Icons */}
        <div className="footer-social">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HealthCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
