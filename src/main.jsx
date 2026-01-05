import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import Auth_provider from "./Auth/Auth_provider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth_provider>
      <RouterProvider router={router} />
      <ToastContainer />
    </Auth_provider>
  </StrictMode>
);
