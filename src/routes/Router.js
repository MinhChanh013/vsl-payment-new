import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DefaultLayout from "../Components/Layout/DefaultLayout.jsx";
import Dashboard from "Pages/Dashboard/Dashboard.jsx";
import SearchTransaction from "Pages/Transaction/SearchTransaction.jsx";
import OrderReconcile from "Pages/OrderReconcile/OrderReconcile.jsx";
import Report from "Pages/Report/Report.jsx";
import User from "Pages/Account/User.jsx";
import Permission from "Pages/Account/Permission.jsx";
import GroupUser from "Pages/Account/GroupUser.jsx";
import DebtAnalysis from "Pages/DebtAnalysis/DebtAnalysis.jsx";
import Login from "Pages/Login/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/searchTransaction", element: <SearchTransaction /> },
      { path: "/DebtAnalysis", element: <DebtAnalysis /> },
      { path: "/OrderReconcile", element: <OrderReconcile /> },
      { path: "/Report", element: <Report /> },
      { path: "/User", element: <User /> },
      { path: "/GroupUser", element: <GroupUser /> },
      { path: "/Permission", element: <Permission /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
