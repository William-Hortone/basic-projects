import React from "react";
import { Navbar } from "../../components";
import images from "../../constants/images";

const Gallery = () => {
  return (
    <div>
      <Navbar title="Gallerie" image1={images.aesgc} image2={images.aesgc} />
    </div>
  );
};

export default Gallery;
