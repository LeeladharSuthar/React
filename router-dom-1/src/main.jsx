import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import { RouterProvider } from "react-router-dom";
import GitHub from "./pages/GitHub";
import GitHubLoader, {gitHubInfoLoader} from "./pages/GitHubLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/github_1",
        element: <GitHub />,
      },
      {
        path: "/github_2",
        element: <GitHubLoader />,
        loader: gitHubInfoLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
