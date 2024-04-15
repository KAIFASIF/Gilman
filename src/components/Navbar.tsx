import React from "react";
import { useRecoilState } from "recoil";

import { Avatar } from "@mui/material";
import { authAtom } from "../recoil/authAtom";
import { Link } from "react-router-dom";

const Navbar = ({ setIsModalOpen }: any) => {
  const [auth, setAuth] = useRecoilState(authAtom);

  const signout = () => {
    setTimeout(() => {
      setAuth({
        isLoggedin: false,
        user: null,
      });
    }, 1000);
  };

  return (
    <nav>
      <div className="flex justify-between mt-4 border-b-2 p-4">
        <div>
          <h1 className=" text-4xl font-semibold">{auth?.partnerName}</h1>
        </div>
        <div className=" hidden lg:flex">
          <Link className="mx-5 mt-2 hover:font-semibold" to="/slots">
            Slots
          </Link>
          {!auth?.isLoggedin && (
            <>
              <button className="mx-5 hover:font-semibold" onClick={() => setIsModalOpen(true)}>
                Signin
              </button>
              <button className="mx-5 hover:font-semibold" onClick={() => setAuth("")}>
                Signup
              </button>
            </>
          )}
          {auth?.isLoggedin && (
            <>
              <button className="mx-5 hover:font-semibold" onClick={signout}>
                Signout
              </button>
              <h1 className="mr-4 mt-1 text-2xl text-green-600 ">
                {auth?.user?.name}
              </h1>
              <Avatar>{auth?.user?.name.substring(0, 1).toUpperCase()}</Avatar>
            </>
          )}
        </div>
        <div className=" mt-2 lg:hidden sm:flex">
          <button className="mx-5" onClick={() => setIsModalOpen(true)}>
            Signin
          </button>
          <button className="mx-5" onClick={() => setAuth("")}>
            Signup
          </button>
          <button className="mx-5" onClick={signout}>
            Signout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
