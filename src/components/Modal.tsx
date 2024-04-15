import React from "react";
import { GrFormClose } from "react-icons/gr";
import { twMerge } from "tailwind-merge";

const Modal = ({ isModalOpen, setIsModalOpen, ModalClass, children }: any) => {
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full">
          <div
            className={twMerge(
              `bg-white rounded p-5 flex flex-col`,
              ModalClass
            )}
          >
            <div className="flex self-end mb-4  rounded-3xl p-1  border-red-600 border-2 hover:bg-red-600">
              <GrFormClose
                className="cursor-pointer text-red-600 place-self-end text-2xl  hover:text-white "
                onClick={() => setIsModalOpen(false)}
              />
            </div>

            {children}
          </div>
        </div>
      )}
    </div>
  );
};
export default React.memo(Modal);
