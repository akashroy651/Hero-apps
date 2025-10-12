import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Installation from '../pages/Installation/Installation';
import Total from '../pages/Total/Total';
import AppsDetails from '../pages/AppsDetails/AppsDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hellobdagzrssssssssssss World</div>,
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,

    children: [
        {
            index:true,
            loader:()=>fetch('/heroData.json'),
            path:"/",
            Component:Home,
        },

        {
          path:'/about',
          Component:About,
        },

        {
          path:'/installation',
          Component:Installation
        },

        {
          index:true,
          loader:()=>fetch('/totalData.json'),
          path:'/about',
          Component:About
        },
        {
          index:true,
          path:'/appsDetails/:id',
           loader:()=>fetch('/totalData.json').then(res => res.json()),
          Component:AppsDetails
        }
    ]
  },
]);