import React from "react";
import "./websites.css";
import images from "../../constants/images";

const Websites = () => {
  return (
    <div className="important-web">
      <a
        className="important-web-section"
        href="https://www.williamhortone.com"
        target="blank"
      >
        <div className="important-web-section-box">
          <img src={images.passport} alt="Slide 1" />
          <div className="web-section-desc">
            <h4>Renouvellement de passeport</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, necessitatibus.
            </p>
          </div>
        </div>
      </a>
      <a
        className="important-web-section"
        href="https://www.example.com/website2"
        target="blank"
      >
        <div className="important-web-section-box">
          <img src={images.anbg} alt="Slide 2" />
          <div className="web-section-desc">
            <h4>Agence nationnal des bourse du gabon</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, necessitatibus.
            </p>
          </div>
        </div>
      </a>
      <a
        className="important-web-section"
        href="https://www.example.com/website3"
        target="blank"
      >
        <div className="important-web-section-box">
          <img src={images.flag} alt="Slide 3" />
          <div className="web-section-desc">
            <h4>Ambassade du Gabon en Chine</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, necessitatibus.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Websites;
