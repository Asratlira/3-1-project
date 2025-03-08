import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboad/Dashboard";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reviews from "./components/Reviews/Reviews";

import Statistics from "./components/Statistics/Statistics";
import GadgetBarChart from "./components/GadgetBarChart/GadgetBarChart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/public/data.json"),
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "stat",
        element: <GadgetBarChart></GadgetBarChart>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: () => fetch("/public/data.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer toast={toast}></ToastContainer>
  </StrictMode>
);
