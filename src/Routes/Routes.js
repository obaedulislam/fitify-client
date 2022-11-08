import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home/Home";
import AddService from "../Pages/Home/Services/AddService/AddService";
import Services from "../Pages/Home/Services/Services/Services";
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
                path: '/services',
                element: <Services></Services>
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