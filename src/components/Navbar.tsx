import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Avatar } from "@mui/material";
import { authAtom } from "../recoil/authAtom";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Signin from "../screens/signin";
import Signup from "../screens/signup";

const Navbar = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState<boolean>(false);

  // const navigate = useNavigate();

  const signout = () => {
    setTimeout(() => {
      setAuth({
        isLoggedin: false,
        user: null,
      });
    }, 1000);
  };

  return (
    <div>
      <Modal
        isModalOpen={isSignupModalOpen}
        setIsModalOpen={setIsSignupModalOpen}
        ModalClass="w-[40%] max-h-[84vh]"
      >
        <Signup setIsModalOpen={setIsSignupModalOpen} />
      </Modal>

      <Modal
        isModalOpen={isSigninModalOpen}
        setIsModalOpen={setIsSigninModalOpen}
        ModalClass="w-[40%] max-h-[50vh]"
      >
        <Signin setIsModalOpen={setIsSigninModalOpen} />
      </Modal>

      <nav>
        <div className="flex justify-between mt-4 border-b-2 p-4">
          <div>
            <h1 className=" text-4xl font-semibold">Gilman Sports Arena</h1>
          </div>
          <div className=" hidden lg:flex">
            <Link className="mx-5 mt-2 hover:font-semibold" to="/">
              Home
            </Link>
            <Link className="mx-5 mt-2 hover:font-semibold" to="/slots">
              Slots
            </Link>
            <Link className="mx-5 mt-2 hover:font-semibold" to="/book-slot">
              Book slot
            </Link>
            {!auth?.isLoggedin && (
              <>
                <button
                  className="mx-5 hover:font-semibold"
                  onClick={() => setIsSigninModalOpen(true)}
                >
                  Signin
                </button>
                <button
                  className="mx-5 hover:font-semibold"
                  onClick={() => setIsSignupModalOpen(true)}
                >
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
                <Avatar>
                  {auth?.user?.name &&
                    auth?.user?.name.substring(0, 1).toUpperCase()}
                </Avatar>
              </>
            )}
          </div>
          <div className=" mt-2 lg:hidden sm:flex">
            <button className="mx-5" onClick={() => setIsSigninModalOpen(true)}>
              Signin
            </button>
            <button className="mx-5" onClick={() => setIsSignupModalOpen(true)}>
              Signup
            </button>
            <button className="mx-5" onClick={signout}>
              Signout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
