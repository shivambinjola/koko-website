import React, { useState, useEffect } from "react";
import secImg from "../assets/sec-img.svg";
import firstImg from "../assets/first-img.svg";
import { ChevronLeft, ChevronRight } from "react-feather";

const ThirdComp = () => {
  const images = ["First", "Second", "Third"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right-0");

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSlideDirection("right");
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection(`right-[${1000 * currentImageIndex}px]`);
  };
  console.log(slideDirection);
  console.log(currentImageIndex);

  return (
    <>
      <div
        className={`relative flex overflow-hidden justify-center space-x-40 ${slideDirection} `}
      >
        {/* {images[currentImageIndex] === "First" && ( */}
        <img className="w-[80vw]" src={secImg} />
        {/* )} */}
        {/* {images[currentImageIndex] === "Second" && ( */}
        <img className="w-[80vw]" src={secImg} />
        {/* )} */}
        {/* {images[currentImageIndex] === "Third" && ( */}
        <img className="w-[80vw]" src={secImg} />
        {/* )} */}
      </div>
      {/* <button onClick={goToNextImage}> nec</button> */}
    </>
  );
};

export default ThirdComp;
