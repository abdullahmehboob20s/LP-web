import Button from "components/Button";
import React from "react";
import girlDancing from "assets/images/girl-dancing.png";
import welcomeBlobRight from "assets/images/welcome-blob.png";
import welcomeBlobLeft from "assets/images/welcome-blob-purple.png";
import welcomeAvatar from "assets/images/welcome-avatar-2.png";

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

      <div className="container text-center lg:text-left flex-col-reverse lg:flex-row flex items-center space-x-4 justify-between">
        <div className="mt-10 lg:mt-0 flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl text-white font-normal mb-2 sm:mb-3 leading-[1.2]">
            Welcome to Halleluiah!
          </h1>
          <p className="title mb-8 sm:mb-11">It’s time to join us.</p>

          <div className="mb-7 sm:mb-10 xl:mb-16">
            <Button title="APPLY NOW" />
          </div>

          <p className="text-[1rem] sm:text-[1.2rem] xl:text-2xl text-white leading-[1.6] lg:leading-[1.6] sm:leading-[1.6] font-normal max-w-[48rem]">
            We are constantly open to meet people who genuinely understand the
            current endless opportunities in the metaverse and web 3.0 ecosystem
            and are committed to make the world a better and more-creative
            space.{" "}
          </p>
        </div>
        {/* <img
          src={girlDancing}
          className="w-[100%] max-w-[12rem] lg:max-w-none lg:w-[30%]"
          alt=""
        /> */}
        <img
          src={welcomeAvatar}
          className="w-[100%] max-w-[12rem] lg:max-w-none lg:w-[45%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Welcome;
