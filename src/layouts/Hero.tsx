import React from "react";
import heroBoy from "assets/images/hero-boy.png";
import heroBlob from "assets/images/hero-blob.png";

function Hero() {
  return (
    <div className="relative">
      <img
        src={heroBlob}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]"
        alt=""
      />

      <div className="container min-h-screen flex items-center justify-between py-[7rem]">
        <div>
          <h1 className="text-6xl leading-[1.3] text-white">
            Introducing music <br /> to the metaverse
          </h1>
        </div>

        <img src={heroBoy} className="w-[32%]" alt="" />
      </div>
    </div>
  );
}

export default Hero;
