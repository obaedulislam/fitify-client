import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";

import Home from "../Pages/Home/Home";
import AddService from "../Pages/Home/Services/AddService/AddService";
import ServiceDetails from "../Pages/Home/Services/Services/ServiceDetails";
import Services from "../Pages/Home/Services/Services/Services";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";

import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";



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
                path: '/service/:id',
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;