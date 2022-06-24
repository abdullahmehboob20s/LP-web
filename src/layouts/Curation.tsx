import React from "react";
import curation from "assets/images/curation.png";

function Curation() {
  return (
    <div className="container flex items-center md:space-x-8 flex-col-reverse md:flex-row">
      <div className="mt-7 md:mt-0">
        <h1 className="title mb-6 sm:mb-7">Halleluiah’s Curation</h1>

        <p className="text-sm sm:text-[1rem] lg:text-[1.1rem] xl:text-xl xl:leading-[1.7] text-white font-normal">
          Halleluiah’s curation is a Shatnez between community, algorithmic and
          human curation. While each of these mechanisms on its own tends to
          become truculent, their Shatnez provides us a remedy to one of the
          biggest pains of today’s music industry.
        </p>
      </div>
      <img src={curation} className="w-[90%] sm:w-[60%] md:w-[46%]" alt="" />
    </div>
  );
}

export default Curation;
