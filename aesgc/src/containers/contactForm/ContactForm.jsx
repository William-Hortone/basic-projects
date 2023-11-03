import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="app__contactForm">
      <div className="app__contactFrom-section">
        <form>
          <label htmlFor="name">Nom*</label>
          <input type="text" placeholder="Nom" required />
          <label htmlFor="email">Email*</label>
          <input type="text" placeholder="Email" required />
          <label htmlFor="message">Message*</label>
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
        <span className="social-media"></span>
      </div>
    </div>
  );
};

export default ContactForm;
