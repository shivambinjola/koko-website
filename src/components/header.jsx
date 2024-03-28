import React from "react";
// import "./header.css";
import Logo from "../assets/logo.png.png";
import humburgerIcon from "../assets/hamburger.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center lg:px-[80px] px-8 font-poppins ">
      <img
        className="md:w-[152px] md:py-0 sm:py-2 w-[10vw] "
        src={Logo}
        alt="Logo"
      />
      <nav className="nav-links lg:block  hidden">
        <ul className="flex space-x-6 lg:mr-[150px] text-lg text-[#212529]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Training</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="lg:hidden">
        <img
          src={humburgerIcon}
          className=" w-[40px] h-[40px] xs:w-[25px] xs:h-[20px]"
        />
      </button>
    </header>
  );
};

export default Header;
