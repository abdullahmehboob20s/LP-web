import React from "react";

function CricleCard({
  children,
  bgImg,
  className,
}: {
  children?: any;
  bgImg?: any;
  className?: any;
}) {
  return (
    <div className="w-[14.4425rem] h-[14.4425rem] rounded-full overflow-hidden border-[.5rem] z-[10] flex items-center justify-center border-black relative shadow-whitish">
      {bgImg ? (
        <img
          src={bgImg}
          className="absolute inset-0 object-cover w-full h-full z-[-1]"
          alt=""
        />
      ) : (
        ""
      )}
      <div className="absolute w-full h-full z-[2] bg-[rgba(0,0,0,.7)]"></div>

      <div className={`relative z-[10] ${className}`}>{children}</div>
    </div>
  );
}

export default CricleCard;
