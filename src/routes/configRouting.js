import Home from "../pages/Home"
import Login from "../pages/Login"
import Error404 from "../pages/Error404"
import User from "../pages/User"

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
        path: "/user",
        exact: true,
        page: User
    },
    {
        path: "*",
        page: Error404
    }
]
