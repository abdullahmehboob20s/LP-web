import React from "react";
import moonpay from "assets/images/moonpay.png";
import convalent from "assets/images/convalent.png";
import magic from "assets/images/magic.png";
import confrenceblob from "assets/images/confrence-blob.png";
import confrenceblob2 from "assets/images/confrence-blob-2.png";

function ConferenceWith() {
  return (
    <div className="relative">
      <img
        src={confrenceblob}
        className="absolute top-[50%] left-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />

      <img
        src={confrenceblob2}
        className="absolute top-[50%] right-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />

      <div className="container relative">
        <div className="text-center sm:text-left mb-[3rem] sm:mb-[9rem]">
          <h4 className="mb-4 text-sm font-[400]">In conference with:</h4>
          <div className="flex items-center justify-center sm:justify-start space-x-6 space-y-2 flex-wrap">
            <img src={moonpay} alt="" />
            <img src={magic} alt="" />
            <img src={convalent} alt="" />
          </div>
        </div>

        <h1 className="text-center desc max-w-[52.875rem] mx-auto">
          Halleluiah is a music NFT marketplace dedicated to on-ramp music from
          the global music library from the univrese to any metaverse and vice
          versa.{" "}
        </h1>
      </div>
    </div>
  );
}

export default ConferenceWith;
