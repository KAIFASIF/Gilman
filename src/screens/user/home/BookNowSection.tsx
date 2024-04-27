import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const BookNowSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-10  h-[50vh] z-20 rounded-xl flex justify-center items-center">
      <div className="px-10">
        <p className="text-xl  text-white  whitespace-pre text-center">
          {" "}
          Champions keep playing until they get it right
        </p>
        <p className="text-2xl lg:text-3xl font-semibold text-white whitespace-pre space-y-4   text-center mt-6">
          {" "}
          One of the Best play ground <br /> in bangalore
        </p>
        <div className="flex justify-center mt-4">
          <div className="w-1/2 mt-10 ">
            <Button
              label="Book now"
              onClick={() => navigate("/book-slot")}
              className="border-none roundede bg-green-600 py-4 hover:bg-green-400 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookNowSection);
