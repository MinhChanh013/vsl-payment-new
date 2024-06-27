import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import SearchTransaction from "../pages/Transaction/SearchTransaction.jsx";
import DebtAnalysis from "../pages/DebtAnalysis/DebtAnalysis.jsx";
import OrderReconcile from "../pages/OrderReconcile/OrderReconcile.jsx";
import Report from "../pages/Report/Report.jsx";
import Login from "../pages/Login/Login.jsx";
import User from "../pages/Account/User.jsx";
import GroupUser from "../pages/Account/GroupUser.jsx";
import Permission from "../pages/Account/Permission.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
