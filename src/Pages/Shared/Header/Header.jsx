import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import('./Header.css')

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
        .then()
        .catch()
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/' >Home</Link></li>
        <li className='font-semibold'><Link to='/services' >Services</Link></li>
        <li className='font-semibold'><Link to='/blog' >Blog</Link></li>
        {
            user?.email ?
            <>  
                <li className='font-semibold bg-dark'><Link to='/myreviews' >My Reviews</Link></li>
                <li className='font-semibold bg-dark'><Link to='/add-service' >Add Services</Link></li>
                <li className='font-semibold'><Link onClick={handleLogout} >Sign Out</Link></li>
                <li className='font-semibold p-0 m-0 user-photo ml-4'><Link>{
                    user?.photoURL ?
                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt={user.displayName} title={user.displayName} /> 
                    :
                    <FaUserCircle className='text-3xl' title={user?.displayName}></FaUserCircle>
                } </Link></li>
            </>
            :
            <li className='font-semibold ml-3'><Link to='/login' >Login</Link></li>
        }
    </>


    return (
        <div className="navbar flex justify-between py-2 px-0 max-w-[1140px] mx-auto">
            <div className="menu-logo">
                <div className="dropdown  ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden mr-[25%]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="flex items-center md:ml-0 ml-3">
                    <div>
                        <img className='sm:w-12 sm:h-10 w-8 h-8' src={logo} alt="" />
                    </div>
                    <div className='ml-2'>
                        <h4 className='font-specially md:text-4xl sm:text-3xl text-2xl font-bold logo-txt text-[#0A5078]'>FitiFy</h4>
                    </div>
                    
                </Link>
            </div>

            <div className="menu-item hidden md:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;