import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SingleReview from './SingleReview';


const MyReviews = () => {

    const {user} = useContext(AuthContext);


    const [userReview, setUserReview] = useState([]);
    // console.log(userReview);
    // const [refresh, setRefresh] = useState(false);
    

    useEffect(() =>{
        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setUserReview(data))
          .catch((err) => toast.error(err.message));
    }, [user?.email]);

    return (
        <div>
            <h1 className='text-5xl'> Your Review {userReview.length}</h1>
            <div className="overflow-x-auto w-full lg:py-20 md:py-12 py-10' ">
                <div className='my-review mx-auto'>
                    <h2 className="font-specially md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">My Reviews</h2>
                    <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-1'></div>
                </div>
                {/* M Reviews Header End */}
                <table className="table w-full -z-0 border-collapse border border-gray-300 mt-5">

                    <thead>
                    <tr >

                        <th className='text-[#0A5078] text-lg capitalize border border-gray-300 text-center'>Service </th>
                        <th  className='text-[#0A5078] text-lg capitalize border border-gray-300 text-center '>Review</th>
                        <th  className='text-[#0A5078] text-lg capitalize border border-gray-300 text-center'>User</th>
                        <th  className='text-[#0A5078] text-lg capitalize border border-gray-300 text-center'>Update / Delete</th>
                    </tr>
                    </thead>
                    <tbody className=''>
                        {
                            userReview.map(review => <SingleReview
                                key={review._id}
                                review = {review}

                            ></SingleReview>)
                        }

                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyReviews;