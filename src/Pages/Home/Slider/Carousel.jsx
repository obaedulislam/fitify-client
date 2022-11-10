import React from 'react';
import CarouselItem from './CarouselItem';
import slider1 from '../../../assets/slide1.jpg'
import slider2 from '../../../assets/slide2.jpg'
import slider3 from '../../../assets/slide3.jpg'
import { Link } from 'react-router-dom';


const carouselData = [
    {
        image: slider1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: slider2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slider3,
        prev: 2,
        id: 3,
        next: 1
    }
]

const Carousel = () => {
    
    return (
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='flex items-center'>
                <div>
                    <h1 className='font-specially md:text-5xl text-2xl text-[0A5078] md:leading-[50px] leading-[30px]'>A brand New<br/> Training Experience</h1>
                    <p className='text-[0A5078]  md:mt-3 mt-3 md:text-lg text-md '>Work towards your fitness goal with one of our amazing personal trainer, with convenient price.</p>
                    <div className=" md:mt-5 mt-3">
                    <Link ><button className="md:py-[8px] py-[5px] rounded-lg   md:px-10 px-5  bg-[#FAB400]  border border-[#FAB400] duration-300 hover:border-[#FAB400] hover:bg-[#ff391100] text-[#000] mr-5 capitalize md:text-lg md:text-md text-sm font-semibold">Get Appointment</button></Link>
                    </div>
                    {/* CTA End */}
                </div>
            </div>
            {/* Hero Text End */}

            <div className='carousel w-full max-h-[600px] rounded-lg md:mt-0 mt-5'>
                {
                    carouselData.map(slide => <CarouselItem
                        key={slide.id}
                        slide={slide}
                    ></CarouselItem>)
                }
            </div>
            {/* Hero Carousel Img End */}

        </div>
    );
};

export default Carousel;