import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');

    // After Login Navigation Variable
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;

        //Send Object Variable
        const service = {
            title: title,
            image: image,
            rating: rating,
            price: price,
            description: description          
        };

        // Post Service Data to Database
        fetch('https://b6a11-service-review-server-side-obaedulislam-obaedulislam.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message);
                navigate(from, {replace: true});
                form.reset();
            } else {
                toast.error(data.error);
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.code);
            toast.error(error.code);
        })

    }


    return (
        <div className='lg:py-20 md:py-12 py-10'>
            
                <h2 className="font-specially md:text-5xl text-3xl text-center  text-[#0A5078]">Add New Service</h2>
                <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-1'></div>
            <div className='max-w-[650px] mx-auto bg-gray-200 sm:p-7 p-4 mt-5 shadow-lg border-gray-700 rounded-xl'>

                <form onSubmit={handleAddService} className='text-black'> 
                    <input name="title" type="text" placeholder="Service Title" className=" sm:mb-4 mb-2 input  w-full  input-bordered bg-white placeholder-slate-600"  required/>  
                    <input name="image" type="url" placeholder="Service Image URl" className="sm:mb-4 mb-2 input  w-full  input-bordered bg-white placeholder-slate-600" required/>

                    <div className='grid grid-cols-1 lg:grid-cols-2 sm:gap-4 gap-2'>

                        <input name="price" type="text" placeholder="Service Price" className="input  w-full  input-bordered bg-white placeholder-slate-600" required />
                        <input name="rating" type="text" placeholder="Give Rating(example:4.8)"  className="input  w-full  input-bordered bg-white placeholder-slate-600" />
                    </div>

                    <textarea name="description" className="textarea textarea-bordered h-24 w-full bg-white sm:mt-4 mt-2 placeholder-slate-600 text-md" placeholder="Service detail description "  required></textarea>

                    <input className="md:mt-3 mt-2 sm:py-2 py-1 px-3 w-full rounded-lg bg-[#0A5078] hover:bg-[#0e6597]  duration-300   text-white capitalize md:text-xl text-lg text-md  font-bold shadow-lg cursor-pointer " type="submit" value="Add Service" />
                </form>
                {/* Add Service Form End */}
            </div>
        </div>
    );
};

export default AddService;