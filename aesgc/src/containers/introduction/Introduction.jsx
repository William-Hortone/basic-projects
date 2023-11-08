import "./introduction.css";
import images from "../../constants/images";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const Introduction = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -1100]);
  return (
    <div className="app__introduction">
      <div className="app__intro-desc">
        <motion.h2 style={{ x }} className="intro-title">
          ASSOCIATION DES ETUDIANTS ET STAGIAIRES GABONAIS EN CHINE
        </motion.h2>

        <div className="app__intro-desc-wrapper">
          <div className="desc-wrapper-content">
            <h2>Description</h2>
            <p>
              Organisation non gouvernementale, apolitique, laïc et à but non
              lucratif
            </p>
          </div>
          <div className="desc-wrapper-content">
            <h2>Membres actifs</h2>
            <p>
              L’association compte plus de 450 membres actifs repartis sur le
              territoire chinois.
            </p>
          </div>
          <div className="desc-wrapper-content">
            <h2>Date de fondation</h2>
            <p>L’association a été créée en 2008.</p>
          </div>
        </div>
      </div>
      <div className="app__introduction-container">
        <div className="intro-container-text">
          <h2>AESGC</h2>
          <p>
            L’Association des Étudiants et Stagiaires Gabonais en Chine (AESGC)
            est une organisation non-gouvernementale, apolitique, laïc et à but
            non-lucratif ouverte à tout étudiant ou stagiaire gabonais pacifique
            et tolérant. Elle ne fait aucune distinction de race, d’ethnie, de
            sexe, de religion ou de philosophie aux membres qui adhérent à ses
            statuts, à son programme et s’acquittent régulièrement de leurs
            cotisations.
          </p>
        </div>
        <div className="intro-container-image">
          <div className="cardImage">
            <img src={images.img19} alt="photo" />
            {/* <div></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
