import Button from "components/Button";
import React from "react";
import girlDancing from "assets/images/girl-dancing.png";
import welcomeBlobRight from "assets/images/welcome-blob.png";
import welcomeBlobLeft from "assets/images/welcome-blob-purple.png";

function Welcome() {
  return (
    <div className="relative">
      <img
        src={welcomeBlobLeft}
        className="absolute top-[50%] left-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />
      <img
        src={welcomeBlobRight}
        className="absolute top-[50%] right-[0%] translate-y-[-50%] z-[-10]"
        alt=""
      />

      <div className="container flex items-center space-x-4 justify-between">
        <div className="flex-1">
          <h1 className="text-6xl text-white font-normal mb-3 leading-[1.2]">
            Welcome to Halleluiah!
          </h1>
          <p className="title mb-11">It’s time to join us.</p>

          <div className="mb-16">
            <Button title="APPLY NOW" />
          </div>

          <p className="desc font-normal max-w-[48rem]">
            We are constantly open to meet people who genuinely understand the
            current endless opportunities in the metaverse and web 3.0 ecosystem
            and are committed to make the world a better and more-creative
            space.{" "}
          </p>
        </div>
        <img src={girlDancing} className="w-[30%]" alt="" />
      </div>
    </div>
  );
}

export default Welcome;
