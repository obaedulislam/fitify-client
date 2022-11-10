import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FitBlogCard from './FitBlogCard';

const FitnessBlog = () => {

    const [fitBlog, setFitBlog] = useState([]);

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-obaedulislam-obaedulislam.vercel.app/blogs`)
        .then(res => res.json())
        .then(data => setFitBlog(data.data))
    } ,[]);

    return (
        <div className='lg:pb-20 md:pb-12 pb-10'>
            <div className='blog-head md:w-1/2 w-full mx-auto'>
                <h2 className="md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Latest Blog</h2>
                <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-2'></div>
                <p className='mt-5 text-center'>You can get latest health tips. Read those blog & implement in your life. all blog was written by health professional.</p>
            </div>
            {/* Blog Header End */}

            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 mt-8'>
                {
                    fitBlog.map(blog => <FitBlogCard
                        key={blog.id}
                        blog={blog}
                    ></FitBlogCard>)
                }
            </div>
            {/* All blog End */}

            <div className='mt-8 flex justify-center'>
                <Link ><button className="py-[7px] rounded-lg   px-10  bg-[#FAB400]  border border-[#FAB400] duration-300 hover:border-[#FAB400] hover:bg-[#ff391100] text-[#000] mr-5 capitalize text-md font-semibold">Show More</button></Link>
            </div>
        </div>
    );
};

export default FitnessBlog;