/* eslint-disable import/no-anonymous-default-export */
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import Users from "../pages/Users";
import User from "../pages/User";
import Proyecto from "../pages/Proyecto"
import Proyectos from "../pages/Proyectos"
import AboutUs from "../pages/AboutUs";

export default [
    {
        path: "/",
        exact: true,
        page: Home
    },
    {
        path:"/aboutus",
        exact: true,
        page: AboutUs
    },
    {
        path: "/login",
        exact: true,
        page: Login
    },{
        path: "/users",
        exact: true,
        page: Users
    },
    {
        path:"/Proyectos",
        exact: true,
        page: Proyectos
    },
    {
        path:"/Proyectos/:id",
        exact: true,
        page: Proyecto
    },
    {
        path:"/:id",
        exact: true,
        page: User
    },
    {
        path: "*",
        page: Error404
    }
]
