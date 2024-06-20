import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import App from "components/App";
import HomePage from "pages/Home/HomePage";
export enum Routes {
  BASE = "/",
  HOME = "/home",
}

export enum AbsoluteRoutes {
  GO_BACK = "..",
}

const router = createBrowserRouter([
  {
    path: Routes.BASE,
    errorElement: (
      <div>
        <Outlet />
      </div>
    ),
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={Routes.HOME} replace={true} />,
      },
      {
        path: Routes.HOME,
        element: <h1>Hello</h1>,
      },
    ],
  },
]);

const BaseRoute = () => {
  return <RouterProvider router={router} />;
};

export default BaseRoute;
