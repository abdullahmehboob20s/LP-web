import React from "react";

function Button({ title }: { title: string }) {
  return (
    <button className="bg-btn-green py-3 px-9 rounded-[4rem] font-bold">
      {title}
    </button>
  );
}

export default Button;
