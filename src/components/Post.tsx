import React from "react";

const Post = () => {
  return (
    <div className="bg-blue-400  h-40  w-full p-10 my-2">
      <p className="text-xl font-semibold">Postgress</p>
      <p className="mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum libero
        tempora eveniet expedita voluptate dolore explicabo rem culpa.
        Perspiciatis non fugit illum ea reprehenderit minus veritatis maxime
        nulla dicta? Tempore!
      </p>
    </div>
  );
};

export default React.memo(Post);
