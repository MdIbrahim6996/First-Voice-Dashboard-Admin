import { type RouteObject } from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import AccountantLayout from "../components/Shared/Layout/AccountantLayout";
import Greeting from "../pages/Accountant/Greeting/Greeting";

export const accountantRoutes: RouteObject = {
    path: "accountant",
    element: <AccountantLayout />,
    children: [
        {
            path: "",
            element: <Greeting />,
        },

        {
            path: "users",
            async lazy() {
                let Users = await import("../pages/Accountant/Users/Users");
                return { Component: Users.default };
            },
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ],
};
