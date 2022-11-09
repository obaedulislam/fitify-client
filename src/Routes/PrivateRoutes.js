import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // Loading Spinner 
    if(loading){
        return <div className='flex justify-center py-8'><button className="btn  text-[#FAB400] bg-[#0A5078]  h-[70px] w-[70px] rounded-full loading"></button></div>;
    }

    //Loading Navigation Place
    if(!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;