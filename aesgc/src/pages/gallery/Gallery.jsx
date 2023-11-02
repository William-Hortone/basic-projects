import React from "react";
import { Navbar } from "../../components";
import images from "../../constants/images";
import { GalleryImage } from "../../containers";
import "./gallery.css";

const Gallery = () => {
  return (
    <div>
      <Navbar title="Gallerie" image1={images.aesgc} image2={images.aesgc} />
      <GalleryImage />
    </div>
  );
};

export default Gallery;
