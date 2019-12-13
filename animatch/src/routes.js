import React from "react";
import Top from "./pages/Top.js";
import About from "./pages/About.js";

const routes = [
  {
    path: "/",
    exact: true,
    children: <Top />
  },
  {
    path: "/about",
    exact: true,
    children: <About />
  }
];

export default routes;
