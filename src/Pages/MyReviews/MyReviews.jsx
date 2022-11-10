import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

import { BsFillStarFill, BsPencilSquare, BsStarHalf} from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyReviews = () => {
    useTitle('My Reviews');
    const {user} = useContext(AuthContext);
    const [userReview, setUserReview] = useState([]);
    const [refresh, setRefresh] = useState(false);

    //User Email specific review
    useEffect(() =>{
        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserReview(data);
            if (data.success) {
                setUserReview(data.data);
              } 
            }
 
            )
    }, [user?.email, refresh]);


    //Delete Individual Review 
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myreview/${id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success(data.message);
            setRefresh(!refresh);
          } else {
            toast.error(data.error);
          }
        }).catch(err => toast.error(err.message))
      };

      const navigate = useNavigate();
      const handleEdit = (id) => {
        navigate(`/myreviews/editreview/${id}`)
      }
    

    return (
        <div>
            <div className="overflow-x-auto w-full lg:py-20 md:py-12 py-10' ">
                <div className='my-review mx-auto'>
                    <h2 className="font-specially md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Total Review: <span className='text-black '>{userReview.length}</span></h2>
                    <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-1'></div>
                </div>
                <div className='max-w-[700px] mx-auto mt-10'>

                        {
                            userReview.map(review =>         
                            
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
                                            <button onClick={() => handleEdit(review._id)} className='p-2 text-lg bg-[#0A5078] text-white rounded-lg mr-2'><BsPencilSquare ></BsPencilSquare></button>
                                        </div>
                                        <div className="hover:tooltip tooltip-open tooltip-bottom" data-tip="Delete">
                                             <button onClick={() => handleDelete(review._id)} className='p-2 text-lg bg-[#0A5078] text-white rounded-lg'><FaTrashAlt></FaTrashAlt></button>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <p className=' text-black'>{review?.review_text}</p>
                                </div>
                            </div>
                           
                        </div>
                        )
                        }
                </div>
 
            </div>
        </div>
    );
};

export default MyReviews;