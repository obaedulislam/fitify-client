import React from 'react';
import About from '../About/About';
import FitnessBlog from '../FitnessBlog/FitnessBlog';
import Services from './Services/Services/Services';
import Carousel from './Slider/Carousel';


const Home = () => {
    return (
        <div>
            <div >
                <div className='pt-12'>
                    <Carousel></Carousel>
                </div>

                <About></About>
                <FitnessBlog></FitnessBlog>

            </div>
        </div>
    );
};

export default Home;