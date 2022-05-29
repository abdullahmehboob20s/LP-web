import React from "react";
import logo from "assets/images/logo.svg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "components/Button";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-black fixed top-0 left-0 w-full z-[100]">
      <div className="container flex items-center justify-between h-[5.5rem] xl:h-[6.5rem]">
        <img
          src={logo}
          className="w-[8rem] sm:w-[10rem] xl:w-[12.0625rem]"
          alt=""
        />

        <div className="flex items-center space-x-3 380px:space-x-4 sm:space-x-6 xl:space-x-8">
          <button className="bg-btn-green py-[0.4rem] sm:py-2 px-4 sm:px-6 xl:py-3 xl:px-9 rounded-[4rem] font-bold text-[0.50rem] 380px:text-xs sm:text-sm xl:text-lg">
            APPLY NOW
          </button>

          <a
            href="/"
            className="text-xl sm:text-2xl xl:text-3xl"
            target="_blank"
          >
            <FaTwitter color="white" />
          </a>
          <a
            href="/"
            className="text-xl sm:text-2xl xl:text-3xl"
            target="_blank"
          >
            <FaLinkedin color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
