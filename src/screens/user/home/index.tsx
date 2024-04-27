import React from "react";
import BookNowSection from "./BookNowSection";
import BookNowImageSection from "./BookNowImageSection";
import Map from "./Map";

const Home = () => {
  return (
    <div className="-mt-10 bg-gray-100">
      <div className="relative w-full flex flex-col justify-center">
        <div className="w-full h-[26vh] md:h-[42vh] lg:h-[80vh] bg-black mt-2 ">
          <img
            src="assets/images/backgrounds.png"
            alt=""
            className="object-fill  w-full"
          />
        </div>

        <div className="bg-black w-1/3 h-[50vh] absolute ml-10 justify-center items-center rounded-2xl opacity-40  hidden lg:block"></div>
        <div className=" w-1/3 h-[50vh] absolute ml-10 justify-center items-center rounded-2xl hidden lg:block">
          <BookNowSection />
        </div>
      </div>

      <div className="m-4 py-4px-4 flex  flex-col gap-4 justify-between lg:flex-row lg:mt-80">
        <BookNowImageSection imgSrc="assets/images/team.png" />
        <BookNowImageSection imgSrc="assets/images/team.png" />
        <BookNowImageSection imgSrc="assets/images/team.png" />
      </div>
      <div className="m-4 py-4  lg:px-4 flex  flex-col gap-4 justify-between lg:flex-row mt-4">
        <Map imgSrc="assets/images/map.png" />
        <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className=" w-1/2 flex justify-center items-center mt-10">
            <p className="text-xl whitespace-pre  text-center">
              {" "}
              Contact us @ 9550697457
            </p>
          </div>
          <div className="w-full lg:w-1/2 ">
            <p className="text-xl   whitespace-wrap text-center mt-10">
              {" "}
              Baba Nilaya, 27/A, 2nd Cross, 2nd Stage, Vinayaka Layout,
              Kempapura, Hebbal, Bangalore -560024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
