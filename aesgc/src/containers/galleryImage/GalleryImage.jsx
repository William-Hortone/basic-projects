import React, { useState } from "react";
import "./galleryImage.css";
import images from "../../constants/images";
import { FaTimes } from "react-icons/fa";
import data from "../../constants/data";

const GalleryImage = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const handleSowImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  const handleCloseImage = () => {
    setModel(false);
  };
  return (
    <>
      <div className={model ? "model showModel" : "model"}>
        <img src={tempImgSrc} alt="photo" />
        <div
          className="close--btn"
          onClick={handleCloseImage}
          style={{ cursor: "pointer" }}
        >
          <FaTimes color="#fff" size={23} />
        </div>
      </div>

      <div className="app__galleryImage">
        <div className="app__galleryImage-container">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => handleSowImage(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryImage;
