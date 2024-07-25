import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";
import Home from "@/routes/Home";
import Product from "./Product"; // This is the layout component
import Collections from "@/pages/Product/Collections";
import NewPoster from "@/pages/Product/NewPoster";
import History from "@/pages/Product/History";
import ChatPage from "@/pages/Product/ChatPage";
import ProfilePage from "@/pages/Product/ProfilePage";

export enum Routes {
  BASE = "/",
  PRODUCT = "/product",
  NEW_POSTER = "/product/",
  // DESIGN = "/product/design",
  COLLECTIONS = "/product/collections",
  HISTORY = "/product/history",
  CHAT = "/product/chat/:id",
  PROFILE = "/product/profile",
  LOGIN = "/product/login",
  REGISTER = "/product/register",
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
    path: Routes.LOGIN,
    element: <div>Sign In Page</div>, // Replace with actual component if available
  },
  {
    path: Routes.REGISTER,
    element: <div>Sign Up Page</div>, // Replace with actual component if available
  },
  {
    path: Routes.PRODUCT,
    element: <Product />,
    children: [
      {
        path: Routes.NEW_POSTER,
        element: <NewPoster />,
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
        path: Routes.CHAT,
        element: <ChatPage />,
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
