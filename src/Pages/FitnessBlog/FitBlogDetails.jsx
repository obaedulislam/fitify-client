import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineComment } from "react-icons/ai";

const FitBlogDetails = ({blog}) => {
    const {image, title, description, comment, author} = blog;

    return (
        <div className='rounded-lg  bg-gray-100 shadow border-gray-200'>
            {/* Blog card start Here */}
            <figure><img src={image} className="rounded-t-lg" alt="Shoes" /></figure>
            <div className="card-body px-5 py-5 relative ">
                    <div className='flex items-center justify-between '>
                    <div>
                        <p className='font-semibold text-sm'>By <span className='text-[#0A5078] '>{author.name}</span></p>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineComment className='text-[#0A5078] text-2xl mr-2'></AiOutlineComment> 
                        <p className=' font-semibold text-lg'>{comment}</p>
                    </div>
                </div>

                <div className="card-title flex justify-between">
                    <h2 className=" font-bold text-[20px] ">{title}</h2>
                </div>

                <div className="blog-description mt-2">
                    <p className='  text-[18px]'>{description.slice(0, 100)}</p>

                </div>

            </div>
            <div className=" flex justify-between items-center bg-gray-200 py-3 px-5 rounded-b-lg">
                    <div>
                        <p className='font-semibold text-sm'>Published: {author.last_update}</p>
                    </div>
                    <Link  ><button className=" text-white py-1 px-5 font-semibold rounded-md bg-[#0A5078] hover:bg-[#0e6597]  duration-300  flex justify-center items-center cursor-pointer">Read More</button></Link>
                </div>
            {/* Blog card end Here */}
        </div>

    );
};

export default FitBlogDetails;