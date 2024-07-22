import Home from "@/routes/Home";
import Design from "@/pages/Design";
import Collections from "@/pages/Collections";
import History from "@/pages/History";
import NewPoster from "@/pages/NewPoster";
import ChatDetail from "@/pages/ChatDetail";
import ProfilePage from "@/pages/ProfilePage";
import ProductTest from "./Producttest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";

export enum Routes {
  BASE = "/",
  PRODUCT = "/product",
  DESIGN = "/product/design",
  COLLECTIONS = "/product/collections",
  HISTORY = "/product/history",
  NEW_POSTER = "/product/new-poster",
  CHAT = "/product/chat/:id",
  PROFILE = "/product/profile",
  SIGNIN = "/product/login",
  SIGNUP = "/product/register",
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
  },
  {
    path: Routes.SIGNIN,
    element: <div>Sign In Page</div>, // Replace with actual component if available
  },
  {
    path: Routes.SIGNUP,
    element: <div>Sign Up Page</div>, // Replace with actual component if available
  },
  {
    path: Routes.PRODUCT,
    element: <ProductTest />,
    children: [
      {
        path: Routes.DESIGN,
        element: <Design />,
      },
      {
        path: Routes.COLLECTIONS,
        element: <Collections />,
      },
      {
        path: Routes.HISTORY,
        element: <History />,
      },
      {
        path: Routes.NEW_POSTER,
        element: <NewPoster />,
      },
      {
        path: Routes.CHAT,
        element: <ChatDetail />,
      },
      {
        path: Routes.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
]);

const BaseRoute = () => {
  return <RouterProvider router={router} />;
};

export default BaseRoute;
