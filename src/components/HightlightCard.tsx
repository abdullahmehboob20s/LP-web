import React from "react";

function HightlightCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="hightlight-card rounded-xl sm:rounded-3xl py-7 px-7 sm:px-10 xl:px-20">
      <h1 className="text-xl lg:text-2xl text-white font-normal mb-3">
        {title}
      </h1>
      <p className="text-sm sm:text-base leading-[1.7] text-white font-normal">
        {desc}
      </p>
    </div>
  );
}

export default HightlightCard;
