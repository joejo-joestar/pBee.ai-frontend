import Home from "@/routes/Home";
import MoreAboutUs from "@p/Team";
import Pricing from "@p/Pricing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export enum Routes {
  BASE = "/*",
  PRICING = "/pricing",
  ABOUTUS = "/moreaboutus",
  SIGNIN = "/signin",
  SIGNUP = "/signup",
}

export enum AbsoluteRoutes {
  GO_BACK = "..",
}

const router = createBrowserRouter([
  {
    path: Routes.BASE,
    element: <Home />,
    errorElement: <div>404 No Page</div>,
    children:[{
      
    }]
  },
  {
    path: Routes.PRICING,
    element: <Pricing />,
  },
  {
    path: Routes.ABOUTUS,
    element: <MoreAboutUs />,
  },
  // TODO: Finish
  {
    path: Routes.SIGNIN,
    element: <></>,
  },
  {
    path: Routes.SIGNUP,
    element: <></>,
  },
  {
    path: Routes.SIGNIN,
    element: <></>,
  },
]);

const BaseRoute = () => {
  return <RouterProvider router={router} />;
};

export default BaseRoute;
