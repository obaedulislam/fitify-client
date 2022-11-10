import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";

import Home from "../Pages/Home/Home";
import AddService from "../Pages/Home/Services/AddService/AddService";
import ServiceDetails from "../Pages/Home/Services/Services/ServiceDetails";
import Services from "../Pages/Home/Services/Services/Services";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReviews/EditReview";
import MyReviews from "../Pages/MyReviews/MyReviews";

import Review from "../Pages/Review/Review/Review";

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
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/myreviews/editreview/:id',
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;