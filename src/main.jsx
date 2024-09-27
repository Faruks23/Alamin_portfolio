import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import { SmoothScroll } from "./shared/SmothScroll.jsx";
import Portfolio from "./Component/pages/Portfolio/Portfolio.jsx";
import ServicePage from "./Component/pages/service/Servicepage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll>
      <RouterProvider router={routes}></RouterProvider>
    </SmoothScroll>
  </React.StrictMode>
);
