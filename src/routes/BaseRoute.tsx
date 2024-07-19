import Home from "@/routes/Home";
import Team from "@/pages/Team";
import Pricing from "@/pages/Pricing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";
import ProductTest from "./Producttest";

export enum Routes {
  BASE = "/*",
  PRICING = "/pricing",
  ABOUTUS = "/team",
  SIGNIN = "/login",
  SIGNUP = "/register",
  PRODUCT = "/producttest",
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
        <Team />
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
    path: Routes.PRODUCT,
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
