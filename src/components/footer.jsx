import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F0E8E4] ">
      <div className="flex flex-row justify-between xl:px-36 py-14 lg:px-10 sm:px-5 xs:flex-col xs:px-10 xs:space-y-5">
        <div className="space-y-5">
          <h5 className="text-[#8F776B] font-semibold text-lg tracking-widest">
            CONTACT
          </h5>
          <div className="text-lg text-[#868686] font-normal space-y-1">
            <p>4 Rue Paul Déroulède, </p>
            <p>06000</p>
            <p>Nice, France</p>
            <p>+91 89408 89407</p>
          </div>
        </div>
        <div className="space-y-5">
          <h5 className="text-[#8F776B] font-semibold text-lg tracking-widest">
            MENU
          </h5>
          <div className="text-lg text-[#868686] font-normal space-y-5">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Trainings</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="space-y-5">
          {" "}
          <h5 className="text-[#8F776B] font-semibold text-lg tracking-widest ">
            VISIT OUR STORE
          </h5>
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            className="lg:w-[30vw] lg:h-[40vh] sm:h-[21vh]  contact-map-bg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-white py-2 md:px-36 sm:px-20 text-lg text-[#868686] xs:px-10">
        Copyrights ©KoKoBliss beauty. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
