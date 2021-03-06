import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PageNotFound from "./pages/error/PageNotFound";
import LoginPage from "./pages/account/LoginPage";
import RegisterPage from "./pages/account/RegisterPage";
import ECommercePage from "./pages/ecommerce/ECommercePage";

const routes = [
	{
		path: "app",
		element: <DashboardLayout />,
		children: [
			{ path: "dashboard", element: <DashboardPage /> },
			{ path: "ecommerce", element: <ECommercePage /> },
			{ path: "*", element: <Navigate to="/404" /> },
		],
	},
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Navigate to="/app/dashboard" /> },
			{ path: "*", element: <Navigate to="/404" /> },
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{ path: "404", element: <PageNotFound /> },
];

export default routes;
