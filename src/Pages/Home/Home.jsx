import React from 'react';
import FitnessBlog from '../FitnessBlog/FitnessBlog';
import Carousel from './Slider/Carousel';


const Home = () => {
    return (
        <div>
            <div className='my-10 '>
                <Carousel></Carousel>
                <FitnessBlog></FitnessBlog>
            </div>
        </div>
    );
};

export default Home;