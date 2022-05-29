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
        <h1 className="title mb-12">Features on:</h1>

        <div className="flex space-x-8">
          <img
            className="shadow-whitish rounded-lg bg-black"
            src={feature1}
            alt=""
          />
          <img className="shadow-whitish rounded-lg" src={feature2} alt="" />
          <div className="flex items-center shadow-whitish bg-black rounded-lg justify-center">
            <img src={DJ} className="w-full" alt="" />
          </div>
          <div className="flex items-center shadow-whitish bg-black rounded-lg justify-center px-6">
            <img src={HAAR} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
