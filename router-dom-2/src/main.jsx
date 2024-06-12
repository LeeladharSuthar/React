import React from "react";
import "./index.css";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";
import GitHub from "./pages/GitHub.jsx";
import GitHubLoader, { gitHubInfoLoader } from "./pages/GitHubLoader.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/github_1" element={<GitHub />}/>
      <Route path="/github_2" element={<GitHubLoader />} loader={gitHubInfoLoader}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

