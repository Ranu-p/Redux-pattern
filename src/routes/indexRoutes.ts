// import { lazy } from "react";
// // const HomeComponent =  import("./homeRoutes");
// // const PagesComponent = import("./pagesRoutes");

// // const indexRoutes = [
// // { path: '/home', component: HomeComponent },
// // // routes prior to login (login, resetPassword) - need to put this last or will always match
// // { path: '/', component: PagesComponent }
// // ];

// const HomeComponent = import("../../src/home")

// export default HomeComponent;



// import React, { lazy } from "react";
// const Home = lazy(() => import("../component/home"))
// const login = lazy(() => import("../component/login"))
// const duckpatternhome = lazy(() => import("../component/duckpatternhome"))
// const text = lazy(() => import("../component/text"))
// const indexRoutes = [
//  {
//   component: Home,
//   path: "/home"
//  },
//  {
//   component: login,
//   path: "/login"
//  },
//  {
//   component: duckpatternhome,
//   path: "/duckhome"
// },
//  {
//   component: text,
//   path: "/text"
//  },

// ];
// export default indexRoutes;





/*
 * Created on TUE 27 April 2021
 *
 * Copyright (c) 2021 Flix
 */

// import Layout from '../layouts';
import React, { lazy } from "react";

const HomeComponent = lazy(() => import("../layouts/HomeLayout"))
const PageComponent = lazy(() => import("../layouts/PagesLayout"))
// const HomeComponent = Loadable({loader: () => import('../layouts/HomeLayout'),});
// const PageComponent = Loadable({loader: () => import('../layouts/PagesLayout'),});
const indexRoutes = [
  // home route after login
  //{ path: '/', component: Layout.Home },
  { path: '/home', component: HomeComponent },
  // routes prior to login (login, resetPassword) - need to put this last or will always match
  { path: '/', component: PageComponent }

];

export default indexRoutes;
