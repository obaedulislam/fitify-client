import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData} from 'react-router-dom';
import AddReview from '../../../Review/AddReview/AddReview';

const ServiceDetails = () => {

    const {data} = useLoaderData();
    const service = data;
    const{_id, title, name, image, rating, price, description, service_features} = service;

    return (
        <div className='lg:pb-20 md:pb-12 pb-10 pt-10'>
            <div>
                <div className="foot-head text-center mb-8">
                        <h2 className=" font-specially text-5xl text-[#0A5078] text-center">{name? name : 'FitiFy Fit'}</h2>
                        <div className='w-24 h-1  bg-[#FAB400] mx-auto mt-2'></div>
                    </div>
            </div>

            <div className='grid grid-cols-12 gap-5'>

                {/* Service Details start Here */}
                <div  className='left-details  col-span-9'>
                    <div className="details-service rounded-lg border-gray-200 shadow">
                        <figure>
                            <PhotoProvider
                            peed={() => 800}
                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                            >
                                <div>
                                    <PhotoView  src={image}>
                                        <img src={image} className="rounded-t-lg w-full" alt="Shoes" />
                                    </PhotoView>
                                </div>
                            </PhotoProvider>
                        </figure>
                        {/* Service Photo & implement React Photo Viewer End  */}

                        <div className="card-body px-5 py-5 relative ">
                            <div className='flex items-center justify-between '>
                                <div>
                                    <p className='font-specially text-xl text-black'>Service Price: <span className='text-[#0A5078]'> ${price}</span></p>
                                </div>

                                {/* <div className="badge flex items-center justify-center badge-outline text-[#FAB400] p-3">
                                    <BsFillStarFill className='mr-1 text-lg '></BsFillStarFill>
                                    <span className="text-lg font-semibold p-1 text-[#FAB400] ">{rating}</span>
                                </div> */}
                            </div>

                            <div className="card-title flex justify-between">
                                <h2 className=" font-bold text-2xl text-[#0A5078]">{title}</h2>
                            </div>

                            <div className="blog-description mt-2">
                                <p className='text-black text-[18px]'>{description}</p>
                            </div>

                            {  
                            service?.service_features &&                
                            <div className="service-features">
                            <ol className='list-decimal mt-2 ml-6'>
                                <li><span className="text-lg text-black">{service?.service_features[0]}</span></li>
                                <li><span className="text-lg text-black">{service?.service_features[1]}</span></li>

                            </ol>
                        </div>
                        }

                        </div>
                        <div className='mt-5 flex justify-between items-center bg-gray-200 py-3 px-5 rounded-b-lg'>
                                <Link  ><button className=" text-white py-1 px-5 font-semibold rounded-md bg-[#0A5078] hover:bg-[#0e6597]  duration-300  flex justify-center items-center cursor-pointer">My Review</button></Link>
                                <Link  ><button className=" text-black py-1 px-5 font-semibold rounded-md bg-[#FAB400] hover:bg-[#81fa00]  duration-300  flex justify-center items-center cursor-pointer">Get Service</button></Link>

                        </div>
                    {/* Service Details end Here */}
                    </div>

                    {/* Review Section Start*/}
                    <div>
                        <div className='  p-7 mt-5 shadow-lg border-gray-700 rounded-xl'>
                            <AddReview></AddReview>
                        </div>
                    </div>

                </div>

                <div className='right-other-service'>

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;