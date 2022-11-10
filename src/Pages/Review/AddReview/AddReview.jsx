import React, {  useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData} from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const AddReview = () => {
    
    const {user} = useContext(AuthContext);
    const {data} = useLoaderData();
    const service = data;
    const{_id, title, image} = service;

    const [userReview, setUserReview] = useState([]);
    console.log(userReview)
    const [refresh, setRefresh] = useState(false);


    
    useEffect(() =>{
        fetch(`http://localhost:5000/singleservicereview?serviceId=${data?.serviceId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserReview(data);
            if (data.success) {
                setUserReview(data.data);
                
              } else {
                toast.error(data.error);
              }
              
            })
            .catch((err) => toast.error(err.message));
    }, [ data?.serviceId, refresh]);

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/review`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         if (data.success) {
    //           setUserReview(data.data);
    //         } else {
    //           toast.error(data.error);
    //         }
    //       })
    //       .catch((err) => toast.error(err.message));
    // }, [refresh])

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const userReview = {
            userName: user.displayName,
            email: user.email,
            userPhoto: user.photoURL,
            review_text: form.review.value,
            serviceId: _id,
            serviceTitle: title,
            serviceImg: image 
        };
        fetch(`http://localhost:5000/review`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userReview)
            }).then(res => res.json())
            .then(data => {
            if(data.success){
                toast.success(data.message);
                setRefresh(!refresh);
            } else {
                toast.error(data.error);
            }
            })
            .catch(err => {
            toast.error(err.message);
        })
    }

    return (
        <div>
            {
                user?.email ? <>
                <form onSubmit={handleReviewSubmit}  className='text-black'>   
                    <label htmlFor="review">Your Review:</label>
                    <textarea name="review" className="textarea border-gray-200 	 h-16 w-full bg-white mt-1 placeholder-slate-600 text-md rounded-xl" placeholder="Your opinion about our service "  required></textarea>
                
                    <div className='flex justify-end'>
                        <input className="mt-1 py-1 px-3 ml-auto rounded-lg bg-[#0A5078] hover:bg-[#0e6597]  duration-300   text-white capitalize  shadow-lg cursor-pointer " type="submit" value="Add review" />
                    </div>
                </form>
                </> : <div className='border-4 border-gray-300 mb-10 p-2 rounded-lg'>
                    <h2 className="font-specially  text-3xl text-center">Please <Link to='/login' className='text-[#fa8e00] underline text-4xl'>Login</Link> first to add a review</h2>
                </div>
                // Add Review form End
            }
              
            <div>
                {
                    userReview.map(review => <Review
                        key={review._id}
                        review ={review}
                    > </Review>)
                }
            </div>
            {/* Service All review */}
        </div>
    );
};

export default AddReview;