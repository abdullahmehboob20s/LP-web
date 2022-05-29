import React from "react";

function TeamCard({ img, title }: { img?: any; title: string }) {
  return (
    <div className="m-[1rem]">
      <div className="relative w-[7rem] h-[7rem] xl:w-[10.3275rem] xl:h-[10.3275rem] rounded-full bg-[#C4C4C4] mb-6">
        {img ? (
          <img src={img} className="w-full h-full object-cover" alt="" />
        ) : (
          ""
        )}
      </div>
      <p className="font-base text-white text-center leading-[1.2]">{title}</p>
    </div>
  );
}

export default TeamCard;
