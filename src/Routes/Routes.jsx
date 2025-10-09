import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hellobdagzrssssssssssss World</div>,
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>
  },
]);