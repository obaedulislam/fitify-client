import React from 'react';
import About from '../About/About';
import FitnessBlog from '../FitnessBlog/FitnessBlog';
import Carousel from './Slider/Carousel';


const Home = () => {
    return (
        <div>
            <div className='my-10 '>
                <Carousel></Carousel>
                <FitnessBlog></FitnessBlog>
                <About></About>
            </div>
        </div>
    );
};

export default Home;