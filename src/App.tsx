// import { lazy, Suspense } from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { authAtom } from "./recoil/authAtom";
// import ExtrasUser from "./screens/user/ExtrasUser";
// import AuthLayout from "./recoil/AuthLayout";

// const App = () => {
//   const auth = useRecoilValue(authAtom);


  // //admin routes
  // const Dashboard = lazy(() => import("./screens/admin/dashboard"));
  // const Adminss = lazy(() => import("./screens/admin/adminscren"));

  // // user routes
  // const Home = lazy(() => import("./screens/user/home"));
  // const Slots = lazy(() => import("./screens/user/slots"));
  // const BookSlot = lazy(() => import("./screens/user/bookSlot"));

//   return (
//     <RouterProvider
//       router={createBrowserRouter(
//         createRoutesFromElements(
//           <Route>
//             {auth?.isLoggedin && auth?.user?.role === "ROLE_ADMIN" ? (
//               <Route path="/" element={<AuthLayout />}>
//                 <Route
//                   index
//                   element={
//                     <Suspense>
//                       <Dashboard />
//                     </Suspense>
//                   }
//                 />
//                 <Route
//                   path="/admins"
//                   element={
//                     <Suspense>
//                       <Adminss />
//                     </Suspense>
//                   }
//                 />
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </Route>
//             ) : auth?.isLoggedin && auth?.user?.role === "ROLE_USER" ? (
//               <Route path="/" element={<AuthLayout />}>
//                 <Route
//                   index
//                   element={
//                     <Suspense>
//                       <Home />
//                     </Suspense>
//                   }
//                 />
//                 <Route
//                   path="book-slot"
//                   element={
//                     <Suspense>
//                       <BookSlot />
//                     </Suspense>
//                   }
//                 />
//                 <Route
//                   path="e"
//                   element={
//                     <Suspense>
//                       <ExtrasUser />
//                     </Suspense>
//                   }
//                 />
//                 <Route
//                   path="/slots"
//                   element={
//                     <Suspense>
//                       <Slots />
//                     </Suspense>
//                   }
//                 >
//                   <Route
//                     path=":date"
//                     element={
//                       <Suspense>
//                         <Slots />
//                       </Suspense>
//                     }
//                   />
//                 </Route>
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </Route>
//             ) : (
//               <Route path="/" element={<AuthLayout />}>
//                 <Route
//                   index
//                   element={
//                     <Suspense>
//                       <Home />
//                     </Suspense>
//                   }
//                 />
//                 <Route
//                   path="book-slot"
//                   element={
//                     <Suspense>
//                       <BookSlot />
//                     </Suspense>
//                   }
//                 />

//                 <Route
//                   path="/slots"
//                   element={
//                     <Suspense>
//                       <Slots />
//                     </Suspense>
//                   }
//                 >
//                   <Route
//                     path=":date"
//                     element={
//                       <Suspense>
//                         <Slots />
//                       </Suspense>
//                     }
//                   />
//                 </Route>

//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </Route>
//             )}
//           </Route>
//         )
//       )}
//     />
//   );
// };

// export default App;




import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import RoleWrapper from "./components/app-layout/RoleWrapper";


const App = () => {
  const Signin = lazy(() => import("./screens/signin"));
  // const VehicleData = lazy(() => import("./screens/admin/vehicle-data"));
  // const AlarmStatus = lazy(() => import("./screens/admin/alarm-status"));
  // const BmsStatus = lazy(() => import("./screens/admin/bms-status"));
  // const Product = lazy(() => import("./screens/admin/product"));


    //admin routes
    const Dashboard = lazy(() => import("./screens/admin/dashboard"));
    const Adminss = lazy(() => import("./screens/admin/adminscren"));
  
    // user routes
    const Home = lazy(() => import("./screens/user/home"));
    const Slots = lazy(() => import("./screens/user/slots"));
    const BookSlot = lazy(() => import("./screens/user/bookSlot"));
  const auth = true;

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth ? (
              <Route path="/" element={<RoleWrapper role="ROLE_USER" />}>
                <Route
                  index
                  path="/"
                  element={
                    <Suspense>
                      <Home />
                    </Suspense>
                  }
                />

                <Route
                  path="/slots"
                  element={
                    <Suspense>
                      <Slots />
                    </Suspense>
                  }
                />
                <Route
                  path="/book-slot"
                  element={
                    <Suspense>
                      <BookSlot />
                    </Suspense>
                  }
                />
                
               
                
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Signin />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            )}
          </Route>
        )
      )}
    />
  );
};

export default App;
