import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-70 opacity-25 flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default React.memo(Loader);
