import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Redirect,
} from "react-router-dom";
import SearcherScreen from "./views/AppScreen";
import ErrorScreen from "./views/ErrorScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<App />}
        errorElement={<ErrorScreen />}
      />
      <Route path="/buscador" element={<App />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
