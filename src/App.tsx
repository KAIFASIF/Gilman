import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import RoleWrapper from "./components/app-layout/RoleWrapper";
import { useRecoilValue } from "recoil";
import { authAtom } from "./recoil/authAtom";

function App() {
  const auth = useRecoilValue(authAtom);

  //admin routes
  const Dashboard = lazy(() => import("./screens/admin/dashboard"));
  const AdminScreen = lazy(() => import("./screens/admin/adminscren"));
  const AdminBookings = lazy(() => import("./screens/admin/bookings"));

  // user routes
  const Home = lazy(() => import("./screens/user/home"));
  const Slots = lazy(() => import("./screens/user/slots"));
  const BookSlot = lazy(() => import("./screens/user/bookSlot"));
  const Bookings = lazy(() => import("./screens/user/bookings"));
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth?.isLoggedin === true && auth?.user?.role === "USER" ? (
              <Route element={<RoleWrapper />}>
                <Route
                  index
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
                <Route
                  path="/bookings"
                  element={
                    <Suspense>
                      <AdminBookings />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : auth?.isLoggedin === true && auth?.user?.role === "ADMIN" ? (
              <Route element={<RoleWrapper />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Dashboard />
                    </Suspense>
                  }
                />
                <Route path="/" element={<Slots />} />
                <Route
                  path="/admin-screen"
                  element={
                    <Suspense>
                      <AdminScreen />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : (
              <Route element={<RoleWrapper />}>
                <Route
                  index
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
            )}
          </Route>
        )
      )}
    />
  );
}

export default App;
