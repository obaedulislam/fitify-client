import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='shadow bg-gray-100 sticky top-0 z-10'>
                <Header></Header>
            </div>
            <div className='max-w-[1140px] mx-auto md:px-0 px-3'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;