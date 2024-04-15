import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const CommandCopy = ({ step, description, command, index }: any) => {
  const handleClick = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <p className={`${!step && "hidden whitespace-pre"}`}>Step : {step && index+1}</p>
      <p className={`${!description && "hidden"}`}>{description}</p>
      <div className="bg-gray-800 flex  justify-between mt-2 p-4">
        <p className={`${!command && "hidden"} text-gray-100`}>{command}</p>
        <MdOutlineContentCopy
          className="text-white cursor-pointer"
          onClick={() => handleClick(command)}
        />
      </div>
    </div>
  );
};

export default React.memo(CommandCopy);
