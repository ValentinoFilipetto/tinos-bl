import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Contact from "./components/Contact/Contact.tsx";

import Articles from "./components/Articles/Articles.tsx";
import ErrorPage from "./ErrorPage.tsx";
import "./index.css";
import ArticlePage from "./pages/ArticlePage.tsx";

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
        path: "/articles",
        element: <Articles />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "articles/:articleId",
    element: <ArticlePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
