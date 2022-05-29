import React from "react";

function TeamCard({ img, title }: { img?: any; title: string }) {
  return (
    <div className="flex-1">
      <div className="relative aspect-[1/1] rounded-full bg-[#C4C4C4] mb-6">
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
