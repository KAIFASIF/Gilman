import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { menus } from "./data";
import { Avatar } from "@mui/material";

const MobileNavbar = ({
  auth,
  setIsSignupModalOpen,
  setIsSigninModalOpen,
  signout,
}: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="w-full  shadow-sm shadow-blur-md shadow-gray-400 bg-white  z-50">
      <div className="flex justify-between items-center px-5 p-4 w-full">
        <img
          src="/assets/images/gilmanLogo.png"
          alt="Fashmo logo Image"
          className="w-12 h-auto"
        />
        <p className="font-semibold  text-xl">Gilman Sports Arena</p>
        <IoMenuSharp size={35} onClick={() => setOpen(!open)} />
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`transition-all ease-in-out duration-500 mt-100  overflow--hidden bg-white ${
          open ? "h-full opacity-100 " : "h-0 opacity-0"
        }  w-full px-10 `}
      >
        <div className={`flex ${auth?.isLoggedin ? "block" : "hidden"}`}>
          <Avatar>
            {auth?.user?.name && auth?.user?.name.substring(0, 1).toUpperCase()}
          </Avatar>
          <h1 className="mr-4 mt-1 text-2xl text-green-600 ml-4">
            {auth?.user?.name}
          </h1>
        </div>

        {menus &&
          menus.length > 0 &&
          menus.map((ele: any, index: number) => (
            <div
              key={index}
              onClick={() => navigate(ele?.path)}
              className={`flex p-2  rounded my-2 hover:bg-gray-100 
              ${!open && "hidden"} 
              ${ele.title === "Bookings" && !auth?.isLoggedin ? "hidden" : ""}`}
            >
              <Link onClick={() => setOpen(false)} to={ele?.path}>
                {ele?.title}
              </Link>
            </div>
          ))}

        <div className="flex mb-4">
          {!auth?.isLoggedin && (
            <button
              className="ml-2 hover:font-bold cursor-pointer"
              onClick={() => setIsSigninModalOpen(true)}
            >
              Signin
            </button>
          )}
        </div>
        <div className="flex ">
          {!auth?.isLoggedin && (
            <button
              className="ml-2 hover:font-bold cursor-pointer mb-4"
              onClick={() => setIsSignupModalOpen(true)}
            >
              Signup
            </button>
          )}
        </div>
        <div className="flex ">
          {auth?.isLoggedin && (
            <button
              className="ml-2 hover:font-bold cursor-pointer mb-4"
              onClick={signout}
            >
              Signout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileNavbar);
