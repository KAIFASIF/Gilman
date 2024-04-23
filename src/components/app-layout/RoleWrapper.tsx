import { Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../../recoil/authAtom";
import Button from "../Button";
import Navbar from ".";

const RoleWrapper = () => {
  const auth = useRecoilValue(authAtom);
  const setAuth = useSetRecoilState(authAtom);
  return (!auth?.isLoggedin && auth?.role === null) ||
    (auth?.isLoggedin && auth?.role === "USER") ? (
    <div className="flex flex-col justify-between overflow-clip flex-1 z-50 w-full">
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true, role: "USER" })}
        label="ROLE USER"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: false, role: null })}
        label="ROLE NULL"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true, role: "ADMIN" })}
        label="ROLE ADMIN"
      />
      <nav className="">navbar</nav>
      <nav className="">
        <Navbar />
      </nav>
      <div className="w-full mt-28">
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-between overflow-clip flex-1 z-50 w-full">
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true, role: "USER" })}
        label="ROLE USER"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: false, role: null })}
        label="ROLE NULL"
      />
      <Button
        onClick={() => setAuth({ ...auth, isLoggedin: true, role: "ADMIN" })}
        label="ROLE ADMIN"
      />
      <nav className="">Admin</nav>
      <div className="w-full mt-28">
        <Outlet />
      </div>
    </div>
  );
};

export default RoleWrapper;
