import React from "react";

function Checkbox({
  title,
  name,
  id,
}: {
  title: string;
  name?: string;
  id?: string;
}) {
  return (
    <div className={"checkbox"}>
      <div>
        <input type={"radio"} name={name} id={id} />
      </div>
      <label
        htmlFor={id}
        className="w-max cursor-pointer text-sm sm:text-base xl:text-base"
      >
        {title}
      </label>
    </div>
  );
}

export default Checkbox;
