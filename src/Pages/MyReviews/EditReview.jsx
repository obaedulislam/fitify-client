import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsFillStarFill, BsPencilSquare, BsStarHalf } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const EditReview = () => {

    const { review } = useLoaderData();
    const {user} = useContext(AuthContext);
    useTitle('My Reviews | Edit');

    const navigate = useNavigate();
    const handleEditReview = event => {
        event.preventDefault();
        const form = event.target;

        const updatedReview = {
            review: form.review.value
        }

        fetch(`http://localhost:5000/review/${review._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast.success(`Successfully updated your review for ${review.serviceName} service`);
                    navigate('/myreviews');
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))
    }



    return (
        <div className="py-32 px-10 max-w-[700px] mx-auto">
                    <div className=' mb-3  border border-gray-400 rounded-xl'>
                        <div className=' '>
                            <div className="service-title flex justify-between items-center bg-gray-100 p-3 rounded-t-xl">
                                <div className='flex'>
                                    <div>
                                        <img className='h-10 w-10 mr-3 rounded' src={review?.serviceImg} alt="" />
                                    </div>
                                    <div>
                                        <h3 className=' font-bold text-black'>{review?.serviceTitle}</h3>
                                        <div className='text-[#fab700] flex'>
                                            <BsFillStarFill className='mr-[2px] text-sm'></BsFillStarFill>
                                            <BsFillStarFill className='mr-[2px] text-sm'></BsFillStarFill>
                                            <BsFillStarFill className='mr-[2px] text-sm'></BsFillStarFill>
                                            <BsFillStarFill className='mr-[2px] text-sm'></BsFillStarFill>
                                            <BsStarHalf className='text-sm'></BsStarHalf>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="hover:tooltip tooltip-open tooltip-bottom" data-tip="Update">
                                        <img className='h-10 w-10 mr-3 rounded-full' src={user?.photoURL} alt={user?.photoURL} />
                                    </div>
                                    
                                </div>
                            </div>
                            {/* Edit Review Header End */}

                            <div className='p-3'>
                            <form onSubmit={handleEditReview}  className='text-black'>   
                                <label className='font-semibold' htmlFor="review">Edit Review:</label>
                                <textarea name="review" className="textarea border-gray-200 	 h-24 w-full bg-white mt-1 placeholder-slate-600 text-lg rounded-xl" placeholder="Your opinion about our service " defaultValue={review?.review_text} required></textarea>
                            
                                <div className='flex justify-end'>
                                    <button  className="mt-1 py-2 px-5 ml-auto rounded-lg bg-[#0A5078] hover:bg-[#0e6597]  duration-300 text-lg font-semibold  text-white capitalize  shadow-lg cursor-pointer flex items-center" type="submit" ><BsPencilSquare className='mr-2 text-xl text-white'></BsPencilSquare> Confirm Edit</button>
                                </div>
                            </form>
                            {/* Edit Review Form End */}
                            </div>
                        </div>
                                
                    </div>

      </div>
    );
};

export default EditReview;