import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Review = ({rev}) => {
    const {userName, email, userPhoto, review_text, serviceId, serviceTitle, serviceImg} = rev;
    console.log('rev', rev);
    // const [reviews, setReviews] = useState([]);
    // // const [showModal, setShowModal] = useState(false);
    // const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews?serviceId=${review?._id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('received', data);
    //             setReviews(data.reviews)
    //         })
    // }, [review?._id, refresh]);

    // console.log(reviews);
    return (
        <div className=''>
            
            <div className='review-user flex border-b-2 pb-4  mb-4'>
                <div className="user-img">
                    <Link>{
                        userPhoto ?
                        <img className='w-12 h-12 rounded-full' src={userPhoto} alt={userName} title={userName} /> 
                        :
                        <FaUserCircle className='text-3xl' title={userName}></FaUserCircle>
                    } </Link>
                </div>
                <div className='ml-3'>
                    <h1 className='text-[#0A5078] font-semibold text-xl capitalize mt-1'>{userName}</h1>
                    <div className='review text'>
                        <p className='text-xl text-black mt-1'>{review_text}</p>
                    </div>
                </div>

            </div>
            {/* Review User  */}
            

        </div>
    );
};

export default Review;