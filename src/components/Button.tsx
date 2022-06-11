import React from "react";

function Button({ title, className }: { title: string; className?: string }) {
  return (
    <button
      className={`bg-btn-green py-[0.4rem] sm:py-2 px-4 sm:px-6 xl:py-3 xl:px-9 rounded-[4rem] font-bold text-xs sm:text-sm xl:text-lg ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
