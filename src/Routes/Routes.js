import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import SignUp from "../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            }
        ]
    }
])

export default router;