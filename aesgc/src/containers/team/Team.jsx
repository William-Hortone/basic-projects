import { useState } from "react";
import "./team.css";
import images from "../../constants/images";

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = 2;

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  return (
    <div className="app__team">
      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
        >
          <div className="slide">
            <div className="app__team-container">
              <h2>
                Bureau Executif <span> 2023-2024 </span>
              </h2>

              <div className="wrapper">
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Président</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>President</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="app__team-container">
              <h2>
                Precedent Burreau <span> 2022-2023 </span>
              </h2>

              <div className="wrapper">
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Présidente</h3>
                  <p>AVOME MBA Marossia</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Vice Président</h3>
                  <p>OSSOUGOU-OYAMA Devlin Zion</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Sécretaire géneral</h3>
                  <p>TATY MBOUMBA Shimri Kades</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Sécretaire génerale adjoint</h3>
                  <p>NGUEMBI INES Pamela</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Commissaire aux comptes</h3>
                  <p>NDJIMY SANI Rayann</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Commissaire aux comptes adjointe</h3>
                  <p>IMALET AKENDENGUE Irene</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Trésorière</h3>
                  <p>BAYEMI Elisabeth</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Chargé des affaires sociales</h3>
                  <p>NZIENGUI RABY Randy Bachelard</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Conseiller strategique sociale </h3>
                  <p>EDZANGO BAYABI ENGO Dorisse</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Conseiller stratégique en projet 1</h3>
                  <p>ESLI OTHNIEL LOUNDOU</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Conseiller strategique en projet 2</h3>
                  <p>ABEME MBA Valencia</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Chargé des organisatons</h3>
                  <p>EYEBE LENDOYE Ken Cemich</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Chargé de la communication</h3>
                  <p>ADOU OVOLO Monique Lauriane</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Chargé Culturelle et des délégués</h3>
                  <p>MENGUE DALYBEA</p>
                </div>
                <div className="wrapper-box">
                  <div className="wrapper-box-image">
                    <img src={images.img2} alt="photo" />
                  </div>
                  <h3>Responsable de la discipline</h3>
                  <p>NTSAME ALLOGO Idriss François</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handlePrev} className="slider-button prev">
          Precedent
        </button>
        <button onClick={handleNext} className="slider-button next">
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Team;
