import "./websites.css";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const Websites = () => {
  const { scrollYProgress, scrollXProgress } = useScroll();
  const x = useTransform(scrollXProgress, [0, 1], [0, -100]);

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="important-web">
      <a
        className="important-web-section"
        href="https://www.williamhortone.com"
        target="blank"
      >
        <motion.div style={{ y }} className="important-web-section-box">
          <img src={images.passport} alt="Slide 1" />
          <div className="web-section-desc">
            <h4>Renouvellement de passeport</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, necessitatibus.
            </p>
          </div>
        </motion.div>
      </a>
      <a
        className="important-web-section"
        href="https://www.example.com/website2"
        target="blank"
      >
        <motion.div style={{ y }} className="important-web-section-box">
          <img src={images.anbg} alt="Slide 2" />
          <div className="web-section-desc">
            <h4>Agence nationnal des bourse du gabon</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, necessitatibus.
            </p>
          </div>
        </motion.div>
      </a>
      <a
        className="important-web-section"
        href="https://www.example.com/website3"
        target="blank"
      >
        <motion.div style={{ y }} className="important-web-section-box">
          <img src={images.flag} alt="Slide 3" />
          <div className="web-section-desc">
            <h4>Ambassade du Gabon en Chine</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, necessitatibus.
            </p>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default Websites;
