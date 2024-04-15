// import React from "react";
// import Button from "./Button";

// const Navbar = ({ setIsModalOpen }: any) => {
//   return (
//     <div className="w-full p-10 bg-white">
//       <Button label="Siginin" onClick={() => setIsModalOpen(true)} />
//       <Button label="Signup" onClick={() => setIsModalOpen(true)} />
//     </div>
//   );
// };

// export default React.memo(Navbar);

import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { Avatar } from "@mui/material";
import { authAtom } from "../recoil/authAtom";
import Layout from "./Layout";

const Navbar = ({ setIsModalOpen }: any) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
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
          {!auth?.isLoggedin && (
            <>
              <button className="mx-5" onClick={() => setIsModalOpen(true)}>
                Signin
              </button>
              <button className="mx-5" onClick={() => setAuth("")}>
                Signup
              </button>
            </>
          )}
          {auth?.isLoggedin && (
            <>
              <button className="mx-5" onClick={signout}>
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
