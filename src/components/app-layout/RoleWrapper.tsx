import { Outlet, useParams } from "react-router-dom";
import Components from ".";

const RoleWrapper = ({ role }: any) => {
  const userRoles = ["ROLE_ADMIN", "ROLE_USER"];
  useParams;
  return (
    userRoles?.includes(role) && (
      <div className="flex flex-col justify-between overflow-clip flex-1 z-50 w-full">
        <nav className="">
          <Components />
        </nav>
        <div className="w-full mt-28">
          <Outlet />
        </div>
      </div>
    )
  );
};

export default RoleWrapper;
