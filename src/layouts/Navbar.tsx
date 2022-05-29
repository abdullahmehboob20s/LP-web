import React from "react";
import logo from "assets/images/logo.svg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "components/Button";

function Navbar() {
  return (
    <div className="bg-black fixed top-0 left-0 w-full z-[100]">
      <div className="container flex items-center justify-between h-[6.5rem]">
        <img src={logo} alt="" />

        <div className="flex items-center space-x-8">
          <Button title="APPLY NOW" />
          <a href="/" target="_blank">
            <FaTwitter size={30} color="white" />
          </a>
          <a href="/" target="_blank">
            <FaLinkedin size={30} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
