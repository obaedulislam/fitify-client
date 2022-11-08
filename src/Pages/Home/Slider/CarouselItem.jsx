import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort  } from "react-icons/bs";
import './CarouselItem.css'


const CarouselItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
                    
        <div id={`slide${id}`}  className="carousel-item relative w-full ">
            <div className="carousel-img w-full ">
                <img src={image}  alt='' className="w-full max-h-[600px]" />
            </div>

            <div className="absolute w-[50%] mx-auto justify-center  top-1/4 left-[25%]">
                <h1 className='banner-head text-6xl text-white leading-[65px]'>A brand New<br/> Training Experience</h1>
                <p className='text-white mt-7 text-lg'>Work towards your fitness goal with one of our amazing personal trainer, with convenient price.</p>
                <div className=" flex justify-center items-center  mt-8">
                    <button className="btn bg-[#FAB400] text-black border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] hover:text-white mr-5 capitalize text-lg text-semibold">Get Appointment</button>

                </div>
                {/* CTA End */}
            </div>
            {/* Banner Text End */}


            <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-[#FAB400]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href={`#slide${next}`}  className="btn btn-circle bg-[#FAB400] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
            </div>
        </div> 
    );

};

export default CarouselItem;