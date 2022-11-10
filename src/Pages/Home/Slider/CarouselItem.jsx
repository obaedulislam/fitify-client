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

            <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn  btn-sm btn-circle mr-5 bg-[#0A5078]"><BsArrowLeftShort className=" text-3xl"></BsArrowLeftShort></a> 
                <a href={`#slide${next}`}  className="btn  btn-sm  btn-circle text-white bg-[#0A5078]"><BsArrowRightShort className=" text-3xl"></BsArrowRightShort> </a>
            </div>
        </div> 
        // Carousel Slider End
    );

};

export default CarouselItem;