import React, { lazy } from "react";

const index = lazy(() => import("../component/index"))
const login = lazy(() => import("../component/Account/login"))
const SignUp = lazy(() => import("../component/Account/SignUp"))
const duckHome = lazy(() => import("../component/duckHome"))


const pagesRoutes = [



 {
  path: "/login",
  component: (): React.FC => login,
 },

 {
  path: "/SignUp",
  component: (): React.FC => SignUp,
 },
 {
  path: "/duckHome",
  component: (): React.FC => duckHome,
 },


 {
  path: "/",
  component: (): React.FC => index,
 },

];

export default pagesRoutes;


