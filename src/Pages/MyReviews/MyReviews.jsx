import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

import { BsFillStarFill, BsPencilSquare, BsStarHalf} from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const MyReviews = () => {
    useTitle('My Reviews');
    const {user} = useContext(AuthContext);
    const [userReview, setUserReview] = useState([]);
    const [refresh, setRefresh] = useState(false);

      // After Login Navigation Variable
      const navigate = useNavigate();
      const [error, setError] = useState('');
        const location = useLocation();
      const from = location.state?.from?.pathname || '/';

    //User Email specific review
    useEffect(() =>{
        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserReview(data);
            if (data.success) {
                setUserReview(data.data);
                navigate(from, {replace: true});
              } 
            }
 
            )
        .catch(error => {
            console.error(error);
            setError(error.code);
            toast.error(error.code);
        })
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

      const handleEdit = (id) => {
        navigate(`/myreviews/editreview/${id}`)
      }
    

    return (
        <div>
            <div className=" w-full lg:py-20 md:py-12 py-10 ">
                <div className='my-review mx-auto'>
                    <h2 className="font-specially md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Total Review: <span className='text-black '>{userReview.length }</span></h2>
                    <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-1'></div>
                </div>
                <div className='max-w-[700px] mx-auto mt-10'>
                       
                        {  userReview.length > 0 ? 
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
                                            <button onClick={() => handleEdit(review._id)} className='p-2 md:text-lg sm:text-md text-sm bg-[#0A5078] text-white rounded-lg mr-2'><BsPencilSquare ></BsPencilSquare></button>
                                        </div>
                                        <div className="hover:tooltip tooltip-open tooltip-bottom" data-tip="Delete">
                                             <button onClick={() => handleDelete(review._id)} className='p-2 md:text-lg sm:text-md text-sm bg-[#0A5078] text-white rounded-lg'><FaTrashAlt></FaTrashAlt></button>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* My Review Header End */}

                                <div className='p-3'>
                                    <p className=' text-black'>{review?.review_text}</p>
                                </div>
                                {/* My Review Text End */}
                            </div>
                           
                        </div>
                        ): <h3 className='text-3xl font-bold  md:py-28 py-12 text-center'>No reviews were added!</h3>
                        }
                </div>
 
            </div>
        </div>
    );
};

export default MyReviews;