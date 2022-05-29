import React from "react";
import logo from "assets/images/logo.svg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import arrowup from "assets/images/arrow-up.svg";

function Footer() {
  return (
    <div className="bg-black py-12 relative">
      <div className="container relative">
        <button className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center cursor-pointer absolute bottom-[4rem] right-[0] bg-btn-green">
          <img src={arrowup} alt="" />
        </button>

        <header className="mb-8">
          <img src={logo} alt="" />
        </header>
        <main className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24 pb-[5rem]">
          <div className="max-w-[25.5rem]">
            <p className="text-sm white leading-[1.6] font-normal mb-6">
              Halleluiah is a music NFT marketplace dedicated to on-ramp music
              from the global music library from the univrese to any metaverse
              and vice versa.
            </p>
            <div className="flex items-center space-x-6">
              <a href="/" target="_blank">
                <FaTwitter size={24} color="white" />
              </a>
              <a href="/" target="_blank">
                <FaLinkedin size={24} color="white" />
              </a>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Company
            </a>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Manifesto{" "}
            </a>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              FAQ{" "}
            </a>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Terms of use
            </a>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Privacy policy{" "}
            </a>
            <a
              href="#"
              className="text-sm white cursor-pointer font-normal mb-2 block"
            >
              Cookies policy{" "}
            </a>
          </div>
        </main>
        <footer className="flex justify-end">
          <h1 className="text-sm text-white leading-[1]">
            © 2022 Halleluiah. All rights reserved
          </h1>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
