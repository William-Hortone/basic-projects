import { useState } from "react";
import "./navbar.css";
import logoImg from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Navbar = ({ image1, image2, title }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleHideMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="app__navbar">
      <div className="app__header">
        <nav>
          <div className="app__header-logo-img">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="app__header-logo-titles">
            <h4>AESGC</h4>
            <p>Association</p>
          </div>
          <div onClick={handleShowMenu} className="app__header-btn-menu">
            <FaAlignRight size={23} color="white" />
          </div>
        </nav>

        {showMenu && (
          <div className="app__header-menu">
            <span></span>
            <div className="app__header-menu-container">
              <div className="close-btn" onClick={handleHideMenu}>
                <FaTimes color="white" size={23} />
              </div>

              <ul className="menu-links">
                <div className="link-box">
                  <Link to="/" className="link">
                    Accueil
                  </Link>
                </div>
                <div className="link-box">
                  <Link to="/about" className="link">
                    A Propos
                  </Link>
                </div>
                <div className="link-box">
                  <Link to="/gallery" className="link">
                    Gallerie
                  </Link>
                </div>

                <div className="link-box">
                  <Link to="/blog" className="link">
                    Blog
                  </Link>
                </div>
                <div className="link-box">
                  <Link to="/contact" className="link">
                    Contact
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        )}
        <div className="app__header-wrapper">
          <div className="container-titles">
            <h2 style={{ display: "none" }}>Gabonais </h2>
            <h2 className="page-title">{title}</h2>
          </div>
          <div className="app__header-container">
            <div className="container-content container--content1">
              <div className="content">
                <img src={image1} className="image" alt="photo" />
              </div>
            </div>
            <div className="container-content container--content3">
              <div className="content">
                <img src={image2} className="image" alt="photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
