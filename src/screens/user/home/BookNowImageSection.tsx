import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const BookNowImageSection = ({ imgSrc }: any) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4">
      <img src={imgSrc} alt="" className="object-cover  w-full h-96" />

      <div className="w-full">
        <Button
          label="Book now"
          onClick={() => navigate("/book-slot")}
          className="border-none roundede bg-green-600 py-4 hover:bg-green-400 "
        />
      </div>
    </div>
  );
};

export default React.memo(BookNowImageSection);
