import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-wrapper">
        <div>
          <h2>Beijing, China</h2>
          <h2>AESGC2022@outlook.com</h2>
        </div>
        <div>
          <ul>
            <Link to="/" className="footer-link">
              Accueil
            </Link>
            <Link to="/about" className="footer-link">
              A Propos
            </Link>
            <Link to="/gallery" className="footer-link">
              Gallerie
            </Link>
            <Link to="" className="footer-link">
              Guide
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </ul>
          <div>
            <a href="#">
              <FaFacebook size={23} color="#03a9f4" />
            </a>
            <a href="#">
              <FaInstagram size={23} color="#03a9f4" />
            </a>
            <a href="#">
              <FaYoutube size={23} color="red" />
            </a>
          </div>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p>
          AESGC © 2023 | Developed by &nbsp;
          <span>
            <a href="#">William Hortone</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
