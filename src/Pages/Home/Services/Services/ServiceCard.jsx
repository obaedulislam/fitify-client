import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
    const{_id, title, name, image, rating, price, description} = service;
    console.log(price);
    return (
        <div className='rounded-lg  bg-[#0A5078] shadow '>

            {/* Service card start Here */}
            <figure>
                <PhotoProvider
                peed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <div>
                        <PhotoView  src={image}>
                            <img src={image} className="rounded-t-lg" alt="Shoes" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </figure>
            {/* Service Photo & implement React Photo Viewer End  */}

            <div className="card-body px-5 py-5 relative ">
                <div className='flex items-center justify-between '>
                    <div>
                        <p className='font-specially text-2xl text-[#FFEEA3]'>Pay: <span className='text-[#6dff0b] '> ${price}</span></p>
                    </div>

                </div>

                <div className="card-title flex justify-between">
                    <h2 className=" font-bold text-[18px] text-white">{title.slice(0, 30)}...</h2>
                </div>

                <div className="blog-description mt-2">
                    <p className='text-[#FFEEA3]  text-[18px]'>{description.slice(0, 100)}...</p>
                </div>
            </div>
            {/* Service Card Body End here */}
            
            <div className='mt-5 '>
                    <Link to={`/service/${service._id}`} ><button className="py-[7px]  w-full   px-4  bg-[#FAB400]  border border-[#FAB400] duration-300 hover:border-[#FAB400] hover:bg-[#FFEEA3]  text-[#000] mr-5 capitalize text-md font-semibold">Show Details</button></Link>
             </div>
            {/* Service card end Here */}
        </div>
    );
};

export default ServiceCard;