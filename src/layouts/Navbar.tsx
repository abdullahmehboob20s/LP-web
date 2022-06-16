import React from "react";
import logo from "assets/images/logo.svg";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="bg-black fixed top-0 left-0 w-full z-[100]">
      <div className="container flex items-center justify-between h-[5.5rem] xl:h-[6.5rem]">
        <Link to="/">
          <img
            src={logo}
            className="w-[8rem] 380px:w-[7rem] sm:w-[10rem] xl:w-[12.0625rem]"
            alt=""
          />
        </Link>

        <div className="flex items-center space-x-3 380px:space-x-2 sm:space-x-6 xl:space-x-8">
          <a
            className="text-xl 380px:text-base sm:text-2xl xl:text-3xl"
            href="https://twitter.com/Halleluiah_xyz"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter color="white" />
          </a>
          <a
            className="text-xl 380px:text-base sm:text-2xl xl:text-3xl"
            href="https://www.linkedin.com/company/halleluiah/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="white" />
          </a>
          <a
            href="/"
            className="text-xl 380px:text-base sm:text-2xl xl:text-3xl"
            target="_blank"
          >
            <FaDiscord color="white" />
          </a>

          <ScrollLink
            to="form"
            smooth={true}
            offset={-200}
            className="cursor-pointer bg-btn-green py-[0.3rem] sm:py-2 px-4 sm:px-6 xl:py-3 xl:px-8 rounded-[4rem] font-bold text-[0.50rem] 380px:text-[0.50rem] sm:text-sm xl:text-base"
          >
            APPLY NOW
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
