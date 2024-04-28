import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import { useRecoilState } from "recoil";
import { authAtom } from "../../recoil/authAtom";
import { menus } from "./data";
import UserModal from "./UserModal";

const Navbar = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState<boolean>(false);

  const signout = () => {
    setTimeout(() => {
      localStorage.clear();
      setAuth({
        ...auth,
        isLoggedin: false,
        user: { id: null, mobile: null, name: null, role: null },
      });
    }, 1000);
  };

  return (
    <nav>
      <div className="lg:hidden w-full  z-20  bg-white fixed">
        <MobileNavbar
          auth={auth}
          isSignupModalOpen={isSignupModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
          isSigninModalOpen={isSigninModalOpen}
          setIsSigninModalOpen={setIsSigninModalOpen}
          signout={signout}
        />
      </div>

      <UserModal
        isSignupModalOpen={isSignupModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
        isSigninModalOpen={isSigninModalOpen}
        setIsSigninModalOpen={setIsSigninModalOpen}
      />

      <div className="px-2 lg:px-10 w-full   fixed z-20 py-4  hidden lg:block shadow bg-white">
        <div className="flex justify-between ">
          <div className="flex">
            <img
              src="/assets/images/gilmanLogo.png"
              alt="Fashmo logo Image"
              className="w-12 h-auto"
            />
            <h1 className=" text-4xl font-semibold">Gilman Sports Arena</h1>
          </div>
          <div className=" hidden lg:flex">
            {menus &&
              menus.length > 0 &&
              menus.map((ele: any, index: number) => (
                <Link
                  className={`mx-5 mt-2 hover:text-green-400 
                  ${
                    ele.title === "Bookings" && !auth?.isLoggedin
                      ? "hidden"
                      : ""
                  }
                  ${
                    ele.title === "Book Slot" &&
                    auth?.isLoggedin &&
                    auth?.user?.role === "ADMIN"
                      ? "hidden"
                      : ""
                  }`}
                  to={ele?.path}
                  key={index}
                >
                  {ele?.title}
                </Link>
              ))}

            {!auth?.isLoggedin && (
              <>
                <button
                  className="mx-5 hover:text-green-400 -mt-3"
                  onClick={() => setIsSigninModalOpen(true)}
                >
                  Signin
                </button>
                <button
                  className="mx-5 hover:text-green-400 -mt-3"
                  onClick={() => setIsSignupModalOpen(true)}
                >
                  Signup
                </button>
              </>
            )}
            {auth?.isLoggedin && (
              <>
                <button
                  className="mx-5 hover:text-green-400 -mt-3"
                  onClick={signout}
                >
                  Signout
                </button>
                <h1 className="mr-4 mt-1 text-2xl text-green-600">
                  {auth?.user?.name}
                </h1>
                <Avatar>
                  {auth?.user?.name &&
                    auth?.user?.name.substring(0, 1).toUpperCase()}
                </Avatar>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
