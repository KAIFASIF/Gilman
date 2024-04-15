import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { authAtom } from "./recoil/authAtom";
import { useRecoilValue } from "recoil";

const App = () => {
  // const auth = { role: "ROLE_USER" };
  const auth = useRecoilValue(authAtom);

  const Home = lazy(() => import("./screens/user/home"));
  const Slots = lazy(() => import("./screens/user/slots"));
  const CreateSlot = lazy(() => import("./screens/user/createslot"));

  // const Test = lazy(() => import("./screens/test"));
  const Dashboard = lazy(() => import("./screens/admin/dashboard"));
  const Dashboard1 = lazy(() => import("./screens/admin/dashboard"));

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth?.user?.role === "ROLE_ADMIN" ? (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Dashboard />
                    </Suspense>
                  }
                />

                <Route
                  path="/a"
                  element={
                    <Suspense>
                      <Dashboard1 />
                    </Suspense>
                  }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : auth?.user?.role === "ROLE_USER" ? (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/book-slot"
                  element={
                    <Suspense>
                      <CreateSlot />
                    </Suspense>
                  }
                />
                {/* <Route
                  path="/slots"
                  element={
                    <Suspense>
                      <Slots />
                    </Suspense>
                  }
                /> */}

                <Route
                  path="/slots"
                  element={
                    <Suspense>
                      <Slots />
                    </Suspense>
                  }
                >
                  <Route
                    path=":date"
                    element={
                      <Suspense>
                        <Slots />
                      </Suspense>
                    }
                  />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Home />
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
