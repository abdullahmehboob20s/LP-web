import React from "react";
import feature1 from "assets/images/feature1.png";
import feature2 from "assets/images/feature2.png";
import DJ from "assets/images/DJ.png";
import HAAR from "assets/images/HAAR.png";
import featureBlobRed from "assets/images/feature-blob-red.png";
import featureBlobPurple from "assets/images/feature-blob-purple.png";

function Features() {
  return (
    <div className="relative">
      <img
        src={featureBlobRed}
        className="absolute top-[50%] left-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />
      <img
        src={featureBlobPurple}
        className="absolute top-[50%] right-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />

      <div className="container">
        <h1 className="title mb-6 sm:mb-12">Features on:</h1>

        <div className="flex flex-col sm:flex-row  flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 xl:space-x-8">
          <button>
            <img
              className="w-[6rem] md:w-[8rem] xl:w-[12.0625rem] shadow-whitish rounded-lg bg-black"
              src={feature1}
              alt=""
            />
          </button>
          <button>
            <img
              className="w-[6rem] md:w-[8rem] xl:w-[12.0625rem] shadow-whitish rounded-lg"
              src={feature2}
              alt=""
            />
          </button>
          <button className="w-fit py-6 flex items-center shadow-whitish bg-black rounded-lg justify-center">
            <img
              src={DJ}
              className="w-[6rem] md:w-[8rem] xl:w-[12.0625rem]"
              alt=""
            />
          </button>
          {/* <button className="w-fit py-6 flex items-center shadow-whitish bg-black rounded-lg justify-center px-6">
            <img
              src={HAAR}
              className="w-[8rem] md:w-[12rem] xl:w-[15.4375rem]"
              alt=""
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Features;
