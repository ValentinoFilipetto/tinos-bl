import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Contact from "./components/Contact/Contact.tsx";
import MyMusic from "./components/MyMusic/MyMusic.tsx";
import Politics from "./components/Politics/Politics.tsx";
import ErrorPage from "./ErrorPage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/music",
        element: <MyMusic />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
