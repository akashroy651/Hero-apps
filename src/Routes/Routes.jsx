import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Installation from '../pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hellobdagzrssssssssssss World</div>,
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,

    children: [
        {
            index:true,
            loader:()=>fetch('heroData.json'),
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
        }
    ]
  },
]);