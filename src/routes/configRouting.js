import Home from "../pages/Home";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import Users from "../pages/Users";
import User from "../pages/User";

export default [
    {
        path: "/",
        exact: true,
        page: Home
    },
    {
        path: "/login",
        exact: true,
        page: Login
    },
    {
        path:"/iduser",
        exact: true,
        page: User
    },
    {
        path: "/users",
        exact: true,
        page: Users
    },
    {
        path: "*",
        page: Error404
    }
]
