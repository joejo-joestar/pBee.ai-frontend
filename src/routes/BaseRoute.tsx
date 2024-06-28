import Home from "@/routes/Home";
import MoreAboutUs from "@p/Team";
import Pricing from "@p/Pricing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";
import ProductTest from "./ProductTest";

export enum Routes {
  BASE = "/*",
  PRICING = "/pricing",
  ABOUTUS = "/moreaboutus",
  SIGNIN = "/signin",
  SIGNUP = "/signup",
  PRODUCTEST = "/producttest",
}

export enum AbsoluteRoutes {
  GO_BACK = "..",
}

const router = createBrowserRouter([
  {
    path: Routes.BASE,
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
    errorElement: <div>404 No Page</div>,
    children: [{}],
  },
  {
    path: Routes.PRICING,
    element: (
      <>
        <ScrollToTop />
        <Pricing />
      </>
    ),
  },
  {
    path: Routes.ABOUTUS,
    element: (
      <>
        <ScrollToTop />
        <MoreAboutUs />
      </>
    ),
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
    path: Routes.PRODUCTEST,
    element: <ProductTest />,
  },
]);

const BaseRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default BaseRoute;
