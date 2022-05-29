import CricleCard from "components/CricleCard";
import HightlightCard from "components/HightlightCard";
import React from "react";
import circle1img from "assets/images/circle1img.png";
import circle2img from "assets/images/circle2img.png";
import circle3img from "assets/images/circle3img.png";
import circle4img from "assets/images/circle4img.png";
import brandLogo from "assets/images/brand-logo.png";
import logo2 from "assets/images/logo-2.svg";
import highlightBlob from "assets/images/highlight-blob.png";

function Highlights() {
  return (
    <div>
      <div className="container">
        <div className="mb-200px relative">
          <img
            src={highlightBlob}
            className="w-full h-full top-0 left-0 absolute z-[-10]"
            alt=""
          />
          <h1 className="title mb-12">Company’s Highlights</h1>

          <div className="grid grid-cols-2 gap-6 ">
            <HightlightCard
              title="Music NFT’s marketplace"
              desc="Via our web platform, music creators from the universe can check-in with their copyrights and check-out with a new-born NFT. Halleluiah!"
            />
            <HightlightCard
              title="A built-in utility"
              desc="Halleluiah’s NFT’s have a unique utility and it’s within each and every token. Holders of the NFT’s are the only ones who can publicly play the songs in the metaverse. Halleluiah!"
            />
            <HightlightCard
              title="Our Metaconsola"
              desc="At Halleluiah’s space in the metaverse, avatars will find our Metaconsola, where for the first time they can experience music recording. Once the work is done go ahead and press ‘mint’ and Halleluiah!"
            />
            <HightlightCard
              title="Curation"
              desc="One of the biggest questions we have asked is how can we uncover hidden music protagonists  and help them find a way to the center’s stage. We have designed a meta-human algorithm that will do just that. Halleluiah!"
            />
            <HightlightCard
              title="Publisher to the universe"
              desc="Avatars can utilize Halleluiah Publishing to represent their metaverse work in the universe, so it can surface in Tiktok, Instagram etc. Halleluiah!"
            />
            <HightlightCard
              title="Multiply dedicated teams"
              desc="Halelluiah consists of some of the most skilled people from IP, music copyrights, blockchain technology and the metaverse. Together we are thriving to generate a huge wave of wealth for IP owners. Halleluiah!"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <CricleCard
            bgImg={circle1img}
            className="flex flex-col items-center justify-center"
          >
            <img src={logo2} className="w-[90%] mb-3" alt="" />
            <p className="text-center text-white text-base font-[700]">
              METAVERSE <br />
              STUDIO
            </p>
          </CricleCard>
          <CricleCard bgImg={circle2img}>
            <p className="text-center text-white text-base font-[700]">
              METAVERSE <br />
              PLATFORMS
            </p>
          </CricleCard>
          <CricleCard className="flex flex-col items-center justify-center">
            <img src={brandLogo} alt="" className="mb-4" />
            <img src={logo2} className="w-[90%] mb-3" alt="" />
            <p className="text-center text-white text-base font-[700]">
              PUBLISHING
            </p>
          </CricleCard>
          <CricleCard
            bgImg={circle3img}
            className="flex flex-col items-center justify-center"
          >
            <img src={logo2} className="w-[90%] mb-3" alt="" />
            <p className="text-center text-white text-base font-[700]">
              NFT
              <br />
              MARKETPLACE
            </p>
          </CricleCard>
          <CricleCard bgImg={circle4img}>
            <p className="text-center text-white text-base font-[700]">
              MUSIC <br />
              IPS
            </p>
          </CricleCard>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
