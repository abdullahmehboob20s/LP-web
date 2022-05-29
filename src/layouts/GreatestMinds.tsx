import React from "react";
import greenJar from "assets/images/green-jar.png";
import redJar from "assets/images/red-jar.png";
import mindblob1 from "assets/images/mind-blob-1.png";
import mindblob2 from "assets/images/mind-blob-2.png";

function GreatestMinds() {
  return (
    <div className="relative">
      <img
        src={mindblob1}
        className="absolute top-[50%] left-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />
      <img
        src={mindblob2}
        className="absolute top-[50%] right-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />
      <div className="container">
        <h1 className="title mb-16">Halleluiah's Metaconsola TM </h1>

        <div className="flex items-center justify-between space-x-4">
          <img src={greenJar} alt="" />
          <p className="desc mx-auto text-center max-w-[52.875rem] w-full">
            We brought in some of the greatest minds in audio engineering to
            help us fulfill a vision where every avatar gets the chance to
            generate music without any preliminary knowledge.
          </p>
          <img src={redJar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GreatestMinds;
