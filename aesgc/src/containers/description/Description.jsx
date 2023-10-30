import React from "react";
import "./description.css";

const Description = () => {
  return (
    <div className="app__description">
      <div className="app__description-image">
        <div className="app__description-image_img"></div>
      </div>
      <div className="app__description-container">
        <div>
          <h2>Qui Sommes-Nous?</h2>
          <p>
            L’Association des Étudiants et stagiaires Gabonais en Chine (AESGC)
            est une organisation non-gouvernementale, apolitique, laïc et à but
            non-lucratif ouverte à tout étudiant ou Stagiaire gabonais pacifique
            et tolérant. Elle ne fait aucune distinction de race, d’ethnie, de
            sexe, de religion ou de philosophie aux membres qui adhérent à ses
            statuts, à son programme et s’acquittent régulièrement de leurs
            cotisations.
          </p>
        </div>
        <div>
          <h2>Que Fait-on?</h2>
          <ul>
            <li>Mise en valeur des talents de la communauté.</li>
            <li>Intégration des nouveaux membres de la communauté.</li>
            <li>Veiller au bon fonctionnement de la communauté.</li>
            <li>
              Assurer le divertissement et l’épanouissement de la communauté.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
