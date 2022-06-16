import React from "react";
import heroBoy from "assets/images/hero-boy.png";
import heroBlob from "assets/images/hero-blob.png";

function Hero() {
  return (
    <div className="relative">
      <img
        src={heroBlob}
        className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]"
        alt=""
      />

      <div className="container min-h-screen flex-col lg:flex-row flex items-center space-y-3 sm:space-y-0 justify-center sm:justify-between py-[7rem]">
        <div>
          <h1 className="text-3xl sm:text-4xl text-center lg:text-left lg:text-5xl xl:text-6xl lg:leading-tight md:leading-tight xl:leading-tight  text-white">
            Introducing music <br /> to the metaverse
          </h1>
        </div>

        <img
          src={heroBoy}
          className="max-w-[20rem] lg:max-w-none w-[100%] lg:w-[32%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
