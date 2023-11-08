import React from "react";
import "./contactForm.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="app__contactForm">
      <div className="app__contactFrom-section">
        <form>
          <label htmlFor="name">
            Noms<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" placeholder="Nom" required />
          <label htmlFor="email">
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" placeholder="Email" required />
          <label htmlFor="message">
            Message<span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            placeholder="Message"
            name="message"
            id="message"
          ></textarea>
          <button className="submit-btn" type="submit">
            Envoyer
          </button>
        </form>
      </div>
      <div className="app__contactFrom-section contact-infos">
        <h2>Nous Joindre</h2>
        <p>
          <span></span> Beijing, China
        </p>
        <p>
          <span></span> +86 17280152897
        </p>
        <p>
          <span></span> AESGC2022@outlook.com
        </p>

        <h2>Réseaux Sociaux</h2>
        <span className="social-media">
          <div>
            <a href="#">
              <FaFacebook size={23} color="#fff" />
            </a>
            <a href="#">
              <FaInstagram size={23} color="#fff" />
            </a>
            <a href="#">
              <FaYoutube size={23} color="red" />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
