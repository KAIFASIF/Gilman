import React from "react";
import Loader from "./Loader";

type layoutProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<layoutProps> = ({ isLoading, children }) => {
  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute top-0 left-0 inset-0  rounded-lg w-full flex justify-center h-screen opacity-20 items-center z-50">
          <Loader />
        </div>
      )}
      <div className="absolutel">{children}</div>
    </div>
  );
};

export default React.memo(Layout);


// import React from "react";
// import Loader from "./Loader";

// type layoutProps = {
//   isLoading: boolean;
//   children: React.ReactNode;
// };

// const Layout: React.FC<layoutProps> = ({ isLoading, children }) => {
//   return (
//     <div className="relative w-full h-screen">
//       {isLoading && (
//         <div className="absolute top-0 left-0 inset-0 bg-black  rounded-lg w-full flex justify-center h-screen opacity-20 items-center z-50">
//           <Loader />
//         </div>
//       )}
//       <div className="absolutel">{children}</div>
//     </div>
//   );
// };

// export default React.memo(Layout);
