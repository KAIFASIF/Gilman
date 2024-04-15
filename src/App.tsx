import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

const App = () => {
  const auth = { role: "ROLE_USER" };
  // const auth = useRecoilValue(authAtom);
  const Signin = lazy(() => import("./screens/signin"));

  const Home = lazy(() => import("./screens/user/home"));
  const Home1 = lazy(() => import("./screens/user/home"));

  // const Test = lazy(() => import("./screens/test"));
  const Dashboard = lazy(() => import("./screens/admin/dashboard"));
  const Dashboard1 = lazy(() => import("./screens/admin/dashboard"));

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth?.role === "ROLE_ADMIN" ? (
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
            ) : auth?.role === "ROLE_USER" ? (
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
                  path="/a"
                  element={
                    <Suspense>
                      <Home1 />
                    </Suspense>
                  }
                />
                

                {/* <Route path="/loan-application" element={<Suspense><LoanApplication /></Suspense>}>
                        <Route path=":loanId" element={<Suspense><LoanApplication /></Suspense>} />
                      </Route> */}
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
