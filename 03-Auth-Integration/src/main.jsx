import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Signin from "./Components/Signin/Signin.jsx";
import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Oders from "./Components/Oders/Oders.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Oders></Oders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
