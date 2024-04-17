import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const BookNowSection = ({ imageSrc }: any) => {
    const navigate = useNavigate()
  return (
    <div className="w-[40%] bg-gray-100 p-2">
      <div className="w-full h-[30vh]">
        <img
          src={imageSrc}
          alt="playing image"
          className="object-cover w-full  max-h-full"
        />
      </div>
      <div className="">
        <Button
          label="Book now"
          onClick={() => navigate('/book-slot')}
          className="border-none rounded-none bg-green-600"
        />
      </div>
    </div>
  );
};

export default React.memo(BookNowSection);
