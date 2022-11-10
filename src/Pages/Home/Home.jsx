import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import About from '../About/About';
import FitnessBlog from '../FitnessBlog/FitnessBlog';
import ServiceCard from './Services/Services/ServiceCard';
import Carousel from './Slider/Carousel';


const Home = () => {
    const [services, setServices] = useState([]);
    useTitle('Home');
    
    useEffect(() =>{
        fetch('https://b6a11-service-review-server-side-obaedulislam-obaedulislam.vercel.app/services')
        .then(res => res.json())
        .then((data) => {
            if (data.success) {
              setServices(data.dataLimit);
            } else {
              toast.error(data.error);
            }
          })
          .catch((err) => toast.error(err.message));
    }, [])

    return (
        <div>
            <div >
                <div className='md:pt-20 pt-6'>
                    <Carousel></Carousel>
                </div>
                {/* Home Hero Carousel End */}

                <div className='services lg:pt-20 md:pt-12 pt-10'>
                    <div className='service-head md:w-1/2 w-full mx-auto'>
                        <h2 className="md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Our Services</h2>
                        <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-2'></div>
                        <p className='mt-5 text-center'>We ensure that, you can get world class service form us. Here are some some service that we provide now!</p>
                    </div>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8'>
                            {
                                services.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>)
                            }
                    </div>

                    <div className='mt-8 flex justify-center'>
                         <Link to='/services' ><button className=" text-white py-2 px-7 font-semibold rounded-md bg-[#0A5078] hover:bg-[#0e6597]  duration-300  flex justify-center items-center cursor-pointer text-lg">View More</button></Link>
                    </div>
                </div>
                {/* Home Services End */}

                <About></About>
                {/* Home About Component End */}

                <FitnessBlog></FitnessBlog>
                {/* Home Blog Q & A End */}

            </div>
        </div>
    );
};

export default Home;