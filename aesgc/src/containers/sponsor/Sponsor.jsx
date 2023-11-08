import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import images from "../../constants/images";
// import ImageOne from "../../assets/10.";
import ImageTwo from "../../assets/14.jpg";
import ImageThree from "../../assets/33.jpeg";
import "./sponsor.css";

const Sponsor = () => {
  const imagesCarousel = [
    images.img1,
    images.img15,
    images.img18,
    images.img21,
  ];
  //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   const goToPreviousImage = () => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === 0 ? imagesCarousel.length - 1 : prevIndex - 1
  //     );
  //   };

  //   //   const goToNextImage = () => {
  //   //     setCurrentImageIndex((prevIndex) =>
  //   //       prevIndex === imagesCarousel.length - 1 ? 0 : prevIndex + 1
  //   //     );
  //   //   };
  //   const goToNextImage = () => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === imagesCarousel.length - 1 ? 0 : prevIndex + 1
  //     );
  //   };

  //   useEffect(() => {
  //     const interval = setInterval(goToNextImage, 3000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [currentImageIndex]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % imagesCarousel.length;
      handleSelect(nextIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [index, imagesCarousel]);
  return (
    <div className="app__sponsor-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imagesCarousel.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              className="img-carousel"
              //   style={{ width: "100%", height: "100%" }}
              src={image}
              alt={`Slide ${i}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Sponsor;
