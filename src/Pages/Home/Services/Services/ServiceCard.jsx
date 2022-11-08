import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const{_id, title, name, image, rating, price, description} = service;
    console.log(price);
    return (
        <div className='rounded-lg  bg-[#0A5078] shadow '>
            {/* Service card start Here */}
            <figure><img src={image} className="rounded-t-lg" alt="Shoes" /></figure>
            <div className="card-body px-5 py-5 relative ">
                <div className='flex items-center justify-between '>
                    <div>
                        <p className='font-specially text-2xl text-[#FFEEA3]'>Pay: <span className='text-[#6dff0b] '> ${price}</span></p>
                    </div>

                    <div className="badge flex items-center justify-center badge-outline text-[#FAB400] p-3">
                        <BsFillStarFill className='mr-1 text-lg '></BsFillStarFill>
                        <span className="text-lg font-semibold p-1 text-[#FAB400] ">{rating}</span>
                    </div>
                </div>

                <div className="card-title flex justify-between">
                    <h2 className=" font-bold text-[18px] text-white">{title.slice(0, 30)}...</h2>
                </div>

                <div className="blog-description mt-2">
                    <p className='text-[#FFEEA3]  text-[18px]'>{description.slice(0, 100)}...</p>
                </div>

            </div>
            <div className='mt-5 '>
                    <Link ><button className="py-[7px]  w-full   px-4  bg-[#FAB400]  border border-[#FAB400] duration-300 hover:border-[#FAB400] hover:bg-[#FFEEA3]  text-[#000] mr-5 capitalize text-md font-semibold">Show Details</button></Link>
             </div>
            {/* Service card end Here */}
        </div>
    );
};

export default ServiceCard;