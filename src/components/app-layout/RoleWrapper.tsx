import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
// import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../../recoil/authAtom";
// import Button from "../Button";
import Navbar from ".";

const RoleWrapper = () => {
  const auth = useRecoilValue(authAtom);
  // const setAuth = useSetRecoilState(authAtom);
  // setAuth({ ...auth,isLoggedin: false,    user:{id:null, mobile:null, name:null, role:null} })

  return (!auth?.isLoggedin && auth?.user?.role === null) ||
    (auth?.isLoggedin && auth?.user?.role === "USER") ? (
    <div className="flex flex-col justify-between overflow-clip flex-1 z-50 w-full">
      {/* <Button
        onClick={() => setAuth({ ...auth, isLoggedin: false,   user:{ id: null, mobile: null, name: null, role: null } })}
        label="ROLE NULL"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true,   user:{ id: 1, mobile: 9700174021, name: "dsadas", role: "USER" } })}
        label="ROLE USER"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true,   user:{ id: 1, mobile: 9700174021, name: "dsadas", role: "ADMIN" } })}
        label="ROLE ADMIN"
      /> */}

      <nav className="">
        <Navbar />
      </nav>
      <div className="w-full mt-28">
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-between overflow-clip flex-1 z-50 w-full">
      {/* <Button
        onClick={() => setAuth({ ...auth, isLoggedin: false,   user:{ id: null, mobile: null, name: null, role: null } })}
        label="ROLE NULL"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true,   user:{ id: 1, mobile: 9700174021, name: "dsadas", role: "USER" } })}
        label="ROLE USER"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true,   user:{ id: 1, mobile: 9700174021, name: "dsadas", role: "ADMIN" } })}
        label="ROLE ADMIN"
      /> */}
      <nav className="">Admin</nav>
      <div className="w-full mt-28">
        <Outlet />
      </div>
    </div>
  );
};

export default RoleWrapper;
