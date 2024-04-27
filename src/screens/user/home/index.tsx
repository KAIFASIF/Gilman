import React from "react";
import BookNowSection from "./BookNowSection";

const Home = () => {


  return (
    <div>
      <div className="relative  h-[40vh] flex flex-col   w-full">
        <div className="w-full absolute   mt-0 h-64">
         
          <img
            src="assets/images/bgImage.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute  w-full bottom-0 flex flex-col  items-center justify-center  h-48 px-20">
          <div className="w-full bg-blue-400 h-40 ">
            {" "}
            <BookNowSection imageSrc="assets/images/bgImage.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 w-full px-10">
        <p className="font-bold">Location :</p>
        <p className="mt-2 font-semibold">
          #27/A, Baba Nilaya, 27/A, 2nd Cross, 2nd Stage, Vinayaka Layout,
          Kempapura, Hebbal, Bengaluru, Karnataka - 560024
        </p>

        <div className="mt-4 w-full">
          <img
            src="assets/images/mapImage.png"
            alt=""
            className="object-cover w-full h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);

{
  /* <div>
<div className="relative  h-[40vh] flex flex-col   w-full">
  <div className="w-full absolute   mt-0 h-64">
    <img
      src="assets/images/bgImage.png"
      alt=""
      className="object-cover w-full h-full"
    />
  </div>

  <div className="absolute  w-full bottom-0 flex flex-col  items-center justify-center  h-48 px-20  z-20">
    <div className="w-full bg-blue-400 h-40 ">
      {" "}
      <BookNowSection imageSrc="assets/images/bgImage.png" />
    </div>
  </div>
</div>
<div className="flex flex-col items-center mt-10 w-full px-10">
  <p className="font-bold">Location :</p>
  <p className="mt-2 font-semibold">
    #27/A, Baba Nilaya, 27/A, 2nd Cross, 2nd Stage, Vinayaka Layout,
    Kempapura, Hebbal, Bengaluru, Karnataka - 560024
  </p>

  <div className="mt-4 w-full">
    <img
      src="assets/images/mapImage.png"
      alt=""
      className="object-cover w-full h-72"
    />
  </div>
</div>
</div> */
}
