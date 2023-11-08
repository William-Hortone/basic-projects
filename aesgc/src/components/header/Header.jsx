import { useState } from "react";
import "./header.css";
import logoImg from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaAlignRight, FaTimes } from "react-icons/fa";

// const Menu = (
//   <div className="app__header-menu">
//     <span></span>
//     <div className="app__header-menu-container">
//       <div className="close-btn" onClick={handleHideMenu}>
//         <FaTimes color="white" size={23} />
//       </div>

//       <ul className="menu-links">
//         <div className="link-box">
//           <Link to="/" className="link">
//             Accueil
//           </Link>
//         </div>
//         <div className="link-box">
//           <Link to="/about" className="link">
//             A Propos
//           </Link>
//         </div>
//         <div className="link-box">
//           <Link to="/gallery" className="link">
//             Gallerie
//           </Link>
//         </div>

//         <div className="link-box">
//           <Link className="link">Guide d'etude</Link>
//         </div>
//         <div className="link-box">
//           <Link to="/contact" className="link">
//             Contact
//           </Link>
//         </div>
//       </ul>
//     </div>
//   </div>
// );
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleHideMenu = () => {
    setShowMenu(false);
  };
  return (
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
                <Link className="link">Guide d'etude</Link>
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
          <h2>
            communaute <span>Des</span>
          </h2>
          <h2> Gabonais De Chine</h2>
        </div>
        <div className="app__header-container">
          <div className="container-content  container--content1">
            <div className="content image1"></div>
          </div>
          <div className="container-content containerC2 container--content2">
            <div className="content image2"></div>
          </div>
          <div className="container-content containerC3 container--content3">
            <div className="content image3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
