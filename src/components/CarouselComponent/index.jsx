import "./styles.css";
import React from "react";

const CarouselImgComponent = ({ img, alt }) => {
  return (
    <>
      <img className="slider" src={img} alt={alt} />
    </>
  );
};

const CarouselCaptionComponent = ({ title, detail }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{detail}</p>
    </>
  );
};

export { CarouselImgComponent, CarouselCaptionComponent };
