import React, { lazy } from "react";
const Home = lazy(() => import("../component/home"))

const homeRoutes = [
 {
  component: Home,
  path: "/home"
 },

];
export default homeRoutes;
