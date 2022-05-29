import React from "react";
import greenJar from "assets/images/green-jar.png";
import redJar from "assets/images/red-jar.png";
import mindblob1 from "assets/images/mind-blob-1.png";
import mindblob2 from "assets/images/mind-blob-2.png";
import useMediaQuery from "hooks/useMediaQuery";

function GreatestMinds() {
  const isBellow640px = useMediaQuery("(max-width : 40em)");
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
        <h1 className="title mb-10 sm:mb-16 text-center sm:text-left">
          Halleluiah's Metaconsola TM{" "}
        </h1>

        <div className="flex items-center justify-between space-x-4">
          <img className="max-w-[100px] md:max-w-none" src={greenJar} alt="" />
          {isBellow640px ? (
            ""
          ) : (
            <p className="desc mx-auto text-center max-w-[52.875rem] w-full">
              We brought in some of the greatest minds in audio engineering to
              help us fulfill a vision where every avatar gets the chance to
              generate music without any preliminary knowledge.
            </p>
          )}
          <img className="max-w-[100px] md:max-w-none" src={redJar} alt="" />
        </div>

        {isBellow640px ? (
          <p className="desc mx-auto text-center max-w-[52.875rem] w-full mt-8  ">
            We brought in some of the greatest minds in audio engineering to
            help us fulfill a vision where every avatar gets the chance to
            generate music without any preliminary knowledge.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GreatestMinds;
