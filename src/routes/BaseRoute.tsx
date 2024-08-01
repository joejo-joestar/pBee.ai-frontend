import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";
import Home from "@/routes/Home";
import Product from "./Product"; // This is a layout component
import Collections from "@/pages/Product/Collections";
import NewPoster from "@/pages/Product/NewPoster";
import History from "@/pages/Product/History";
import ChatPage from "@/pages/Product/ChatPage";
import ProfilePage from "@/pages/Product/ProfilePage";
import ErrorPage from "@/pages/Product/404";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { AuthProvider } from "@/contexts/AuthContext";
import ResetPassword from "@/pages/Login/ResetPassword";
import PrivateRoute from "@/components/PrivateRoute";
import Pricing from "@/pages/Pricing";
import Team from "@/pages/Team";

export enum Routes {
  BASE = "/",
  PRICING = "/pricing",
  TEAM = "/team",
  LOGIN = "/login",
  REGISTER = "/register",
  RESET_PASSWORD = "/reset-password",
  PRODUCT = "/product",
  NEW_POSTER = "/product/",
  PROFILE = "/product/profile",
  COLLECTIONS = "/product/collections",
  HISTORY = "/product/history",
  CHAT = "/product/chat/:sessionId",
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
    errorElement: <ErrorPage />,
  },
  {
    path: Routes.PRICING,
    element: <Pricing />,
  },
  {
    path: Routes.TEAM,
    element: <Team />,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.RESET_PASSWORD,
    element: <ResetPassword />,
  },
  {
    path: Routes.REGISTER,
    element: <Register />,
  },
  {
    path: Routes.PRODUCT,
    element: (
      <PrivateRoute>
        <Product />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
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
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default BaseRoute;
