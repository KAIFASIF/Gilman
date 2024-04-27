import React from "react";

const Map = ({ imgSrc }: any) => {
  return (
    <div className="bg-white p-4 lg:p-4 w-full lg:w-1/2">
      <img src={imgSrc} alt="" className="object-cover  w-full h-96" />
    </div>
  );
};

export default React.memo(Map);
