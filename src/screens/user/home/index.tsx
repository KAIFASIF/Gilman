import React from "react";
import BookNowSection from "./BookNowSection";

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative h-[60vh] flex justify-center">
        <div className="w-full h-[74vh]">
          <img
            src="assets/images/bgImage.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute -bottom-48 w-[80%]  flex  justify-center gap-20">
          <BookNowSection imageSrc="assets/images/bgImage.png" />
          <BookNowSection imageSrc="assets/images/bgImage.png" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
