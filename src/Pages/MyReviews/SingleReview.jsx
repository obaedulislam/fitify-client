import React, { useContext } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const SingleReview = ({review }) => {
    const {review_text, serviceTitle, serviceImg} = review;
    const {user} = useContext(AuthContext);

    return (
        <div>
            <tr className='even:bg-gray-50 '>

            <td className='border border-gray-300'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold ">{serviceTitle}</div>
                    </div>
                </div>
            </td>

            <td className='border border-gray-300 text-center'>
                {review_text}
            </td>

            <td className='border border-gray-300 font-bold text-center'>{user?.displayName}</td>
            <td className='border border-gray-300 text-center'>
                <button className=" text-2xl bg-[#0A5078] p-3 text-white rounded-lg mx-1"><BsPencilSquare></BsPencilSquare></button>
                <button className=" text-2xl bg-[#0A5078] p-3 text-white rounded-lg mx-1"><FaTrashAlt></FaTrashAlt></button>
            </td>
            </tr>
        </div>
    );
};

export default SingleReview;