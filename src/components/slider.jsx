import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Slider = () => {
  const images = ["First", "Second"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

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
    setSlideDirection("left");
  };

  // useEffect(() => {
  //   const slideInterval = setInterval(goToNextImage, 3000);
  //   return () => clearInterval(slideInterval);
  // }, [currentImageIndex]);

  return (
    <div
      className={`relative flex justify-center items-center overflow- xl:h-[120vh] lg:h-[80vh] md:h-[40vh] sm:h-[60vh] xs:h-[50vh] transform delay-[0.5s] ease-in ${slideDirection}`}
    >
      <button
        className="absolute  bg-[#FBFBFB]/80 p-[10px] rounded-full cursor-pointer left-[10px]"
        onClick={goToPreviousImage}
      >
        <ChevronLeft size={24} />
      </button>
      {images[currentImageIndex] === "First" && (
        <div className="h-full w-full bg-bannerfistbg bg-cover text-white flex flex-col justify-center px-32 xs:px-20">
          <h2 className="text-[40px] font-bold w-[401px] leading-[50px] xs:w-full xs:text-2xl">
            Experience Lasting Color with
          </h2>
          <p className="text-[30px] font-extralight xs:text-lg">
            Koko Bliss's Lip Blush Service
          </p>
          <button className="text-base bg-[#8F776B] rounded-[10px] w-[235.8px] h-[45.38px] mt-10">
            Book Your Appointment
          </button>
        </div>
      )}
      {images[currentImageIndex] === "Second" && (
        <div className="bg-bannersecbg bg-cover h-full w-full"></div>
      )}

      {/* <img
          className="w-auto block"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
        /> */}

      <button
        className="absolute  bg-[#FBFBFB]/80 p-[10px] rounded-full cursor-pointer right-[10px]"
        onClick={goToNextImage}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
